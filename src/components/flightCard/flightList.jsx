import React, { useState, useMemo, useEffect } from "react";
import { useFlights } from "../../data/flight";
import { CardSkeleton } from "./skeleton";
import { Filter } from "../filters/filter";
import FlightCard from "./flightCard";
import { RefreshCw, Clock } from "lucide-react";

export default function FlightList() {
  const [fromCountry, setFromCountry] = useState();
  const [toCountry, setToCountry] = useState();
  const [currentTime, setCurrentTime] = useState(Date.now());

  // API'den uçuş verilerini al
  const { flights, loading, error, lastUpdated, refetch } = useFlights();

  // Her 15 saniyede currentTime'ı güncelle ki zaman göstergesi gerçek zamanlı olsun
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 15000); // Her 15 saniye güncelle

    return () => clearInterval(interval);
  }, []);

  const filteredFlights = useMemo(() => {
    let result = flights;

    // "From Airport" filtresi
    if (fromCountry && fromCountry !== "all") {
      result = result.filter((flight) => flight.from?.code === fromCountry);
    }

    // "To Airport" filtresi
    if (toCountry && toCountry !== "all") {
      result = result.filter((flight) => flight.to?.code === toCountry);
    }

    return result;
  }, [flights, fromCountry, toCountry]);

  // Zaman formatı fonksiyonu
  const formatLastUpdated = (timestamp) => {
    if (!timestamp) return "Not updated yet";

    const now = new Date(currentTime); // currentTime kullan
    const updated = new Date(timestamp);
    const diffInSeconds = Math.floor((now - updated) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInSeconds < 30) return "Just now";
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    return updated.toLocaleDateString("en-US");
  };

  // Error durumu
  if (error) {
    return (
      <div className="z-10 w-full xs:w-[95%] sm:w-[350px] flex-shrink-0 text-center p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>API Error: {error}</p>
          <p className="text-sm mt-2">Please check your API key</p>
        </div>
      </div>
    );
  }

  return (
    <div className="z-30 w-full xs:w-[95%] sm:w-[350px] md:w-[380px] flex-shrink-0">
      {/* Last Updated & Refresh Header */}
      <div className="bg-card text-card-foreground rounded-t-lg p-2 xs:p-3 mb-1 flex items-center justify-between sticky top-0 z-10 border-b border-border/10">
        <div className="flex items-center gap-1 xs:gap-2 text-xs xs:text-sm text-muted-foreground">
          <Clock className="w-3 h-3 xs:w-4 xs:h-4" />
          <span>{formatLastUpdated(lastUpdated)}</span>
        </div>

        <button
          onClick={() => refetch()}
          disabled={loading}
          className="flex items-center gap-1 px-1.5 xs:px-2 py-1 m-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors disabled:opacity-50 shrink-0"
        >
          <RefreshCw
            className={`w-3 h-3 xs:w-4 xs:h-4 ${loading ? "animate-spin" : ""}`}
          />
          <span className="text-xs">Refresh</span>
        </button>
      </div>

      <Filter
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        toCountry={toCountry}
        setToCountry={setToCountry}
        flights={flights} // Filtre için flights'ı geç
      />

      <div className="space-y-2 xs:space-y-3 max-h-[calc(100vh-180px)] xs:max-h-[calc(100vh-160px)] sm:max-h-[calc(100vh-180px)] overflow-y-auto">
        {loading ? (
          Array.from({ length: 5 }, (_, i) => <CardSkeleton key={i} />)
        ) : filteredFlights.length > 0 ? (
          filteredFlights.map((flight, i) => (
            <FlightCard key={flight.id || i} flight={flight} />
          ))
        ) : (
          <div className="text-center p-3 xs:p-4 text-muted-foreground">
            <p className="text-sm xs:text-base">No flights found</p>
          </div>
        )}
      </div>
    </div>
  );
}

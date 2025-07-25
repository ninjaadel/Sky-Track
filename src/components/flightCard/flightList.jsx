import React, { useState, useEffect, useMemo } from "react";
import { flights } from "../../../src/data/flight";
import { CardSkeleton } from "./skeleton";
import { Filter } from "../../../src/components/filters/filter";
import FlightCard from "./flightCard";

export default function FlightList() {
  const [fromCountry, setFromCountry] = useState();
  const [toCountry, setToCountry] = useState();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const filteredFlights = useMemo(() => {
    let result = flights;
    
    // "From" ülke filtresi
    if (fromCountry && fromCountry !== "all") {
      result = result.filter(flight => flight.from.country === fromCountry);
    }
    
    // "To" ülke filtresi
    if (toCountry && toCountry !== "all") {
      result = result.filter(flight => flight.to.country === toCountry);
    }
    
    return result;
  }, [fromCountry, toCountry]);

  return (
    <div className=" z-10 xs:w-[90%] sm:w-[350px] flex-shrink-0">
      <Filter
        fromCountry={fromCountry}
        setFromCountry={setFromCountry}
        toCountry={toCountry}
        setToCountry={setToCountry}
      />
    
      <div className="space-y-1">
        {showSkeleton
          ? filteredFlights.map((_, i) => <CardSkeleton key={i} />)
          : filteredFlights.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))}
      </div>
    </div>
  );
}
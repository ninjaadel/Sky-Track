import FlightCard from "./flightCard";
import { flights } from "../../data/flight";
import { Filter } from "../filters/filter";
import { useEffect, useMemo, useState } from "react";
import { CardSkeleton } from "../ui/cardskeleton";
export default function FlightList() {
  const [fromCountry, setFromCountry] = useState();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer); // cleanup!
  }, []);

  const filteredCountry = useMemo(() => {
    if (!fromCountry) return flights;
    return flights.filter((flight) => flight.from.country === fromCountry);
  }, [fromCountry]);

  return (
    <div className="w-sm relative -mt-23">
      <div className="space-y-4">
        {showSkeleton
          ? filteredCountry.map((_, i) => <CardSkeleton key={i} />)
          : filteredCountry.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))}
      </div>
      <Filter fromCountry={fromCountry} setFromCountry={setFromCountry} />
    </div>
  );
}

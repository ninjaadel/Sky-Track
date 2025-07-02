import FlightCard from "./flightCard";
import { flights } from "../../data/flight";
import { Filter } from "../filters/filter";
import { useMemo, useState } from "react";
export default function FlightList() {
  const [fromCountry, setFromCountry] = useState();
  const FiltredCountry = useMemo(() => {
    if (!fromCountry) return flights;
    return flights.filter((flight) => flight.from.country === fromCountry);
  }, [fromCountry]);
  return (
    <div className="w-sm absolute top-5">
      <Filter fromCountry={fromCountry} setFromCountry={setFromCountry} />
      <div className="space-y-4">
        {FiltredCountry.map((flight, i) => (
          <FlightCard key={i} flight={flight} />
        ))}
      </div>
    </div>
  );
}

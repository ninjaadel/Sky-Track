import FlightCard from "./flightCard";
import { flights } from "../../data/flight";
import { Filter } from "../filters/filter";
import { useEffect, useMemo, useState } from "react";
import { CardSkeleton } from "../ui/cardskeleton";
export default function FlightList() {
  const [fromCountry, setFromCountry] = useState();
  const [toCountry, setToCountry] = useState();
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
   
  const filteredToCountry = useMemo(() => {
    if (!toCountry) return filteredCountry;
    return filteredCountry.filter((flight) => flight.to.country === toCountry);
  }, [toCountry, filteredCountry]);
  return (
    <div className=" xs:w-[90%] sm:w-[350px] flex-shrink-0">
      <Filter fromCountry={fromCountry} setFromCountry={setFromCountry} toCountry={toCountry} setToCountry={setToCountry} />
      <div className="space-y-2">
 

        {showSkeleton
          ? filteredCountry.map((_, i) => <CardSkeleton key={i} />)
          : filteredCountry.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))}
      </div>
    </div>
  );
}

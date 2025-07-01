import FlightCard from "./flightCard";
import { flights } from "../../data/flight";
export default function FlightList() {
  return (
    <div className="w-sm ml-4 space-y-4 absolute  top-10">
      {flights.map((flight, i) => (
        <FlightCard key={i} flight={flight} />
      ))}
    </div>
  );
}

import FlightCard from "../components/flightCard";
import { flights } from "../data/flight";
export default function FlightList() {
  return (
    <div className="w-sm ml-7 space-y-4">
      {flights.map((flight, i) => (
        <FlightCard key={i} flight={flight} />
      ))}
    </div>
  );
}

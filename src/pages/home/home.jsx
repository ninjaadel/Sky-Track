import FlightList from "../../components/flightCard/flightList";
import FlightDetails from "../../components/flightDetails/flight.details";

export default function Home() {
  return (
    <div className="flex flex-col  md:items-start  gap-4 w-full mx-auto">
  <FlightList />
  <FlightDetails />
</div>
  );
}
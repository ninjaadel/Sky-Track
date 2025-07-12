import FlightList from "../../../public/for_review/flightCard/flightList";
import FlightDetails from "../../components/flightDetails/flight.details";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4 w-full mx-auto">
      <FlightList />
      <FlightDetails />
    </div>
  );
}
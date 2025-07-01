import FlightList from "../../components/flightCard/flightList";
import FlightDetails from "../../components/flightDetails/flight.details";
import { Header } from "../../components/header/header";

export default function Home() {
  return (
    <div>
      <FlightList />

      <FlightDetails />
    </div>
  );
}

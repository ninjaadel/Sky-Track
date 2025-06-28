import FlightList from "../../components/flightList";
import FlightDetails from "../../components/flightDetails/flight.details";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <FlightList />
      <ThemeToggle />
      <FlightDetails />
    </div>
  );
}

import {Header} from "../../components/header/header";
import FlightList from "../../../public/for_review/flightCard/flightList";
import FlightDetails from "../../components/flightDetails/flight.details";
import { useTheme } from "../../providers/useTheme";
import MyMap from "../../components/map/map";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full bg-[var(--muted)] text-[var(--foreground)]">
      <div className="absolute inset-0 z-19 pointer-events-auto">
        <MyMap theme={theme} />
      </div>

      <div className="absolute top-[3rem] z-19 flex flex-col  md:flex-row md:items-start lg:top-[2rem] gap-4 w-full mx-auto h-full pointer-events-auto">
        <FlightList />
        <FlightDetails />
      </div>
    </div>
  );
}
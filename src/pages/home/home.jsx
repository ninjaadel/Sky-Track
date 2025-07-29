import { Header } from "../../components/header/header";
import FlightList from "../../components/flightCard/flightList";
import { FlightDetails1 } from "../../components/flightDetails/flightDetails";
import { useTheme } from "../../providers/useTheme";
import MyMap from "../../components/map/map";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-full bg-[var(--muted)] text-[var(--foreground)]">
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <MyMap theme={theme} />
      </div>

      <div className="absolute top-[4rem] z-20 flex flex-col md:flex-row md:items-start lg:top-[4rem] xl:top-[3.5rem] gap-4 w-full mx-auto h-full pointer-events-auto px-4">
        <FlightList />
        <FlightDetails1 />
      </div>
    </div>
  );
}

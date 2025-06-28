import { flights } from "../../data/flight";

import { flightQueryKey } from "../../data/for-query_param";

import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { FlightHeader } from "./flightHeader";
import { FlightInfarmation } from "./flightInfarmation";
import { FlightImage } from "./flightImage";
import { FlightRoute } from "./flightRoute";
import { FlightStatus } from "./flightStatus";
import { FlightSchedule } from "./FlightSchedule";
import { FlightActions } from "./flightAction";
export default function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(flightQueryKey);
  const flight = useMemo(
    () => flights.find((f) => f.id === selectedFlight),
    [selectedFlight]
  );

  if (!flights) return null;

  return (
    <aside className="absolute w-sm top-9  -translate-y-2 right-7  rounded-xl overflow-hidden  bg-[var(--chart-1)] text-[var(--card-foreground)] ">
      <FlightHeader flight={flight} />
      <FlightImage flight={flight} />

      <div className="p-3.5"></div>
      <FlightRoute flight={flight} />
      <FlightStatus flight={flight} />
      <FlightSchedule flight={flight} />

      <FlightInfarmation flight={flight} />

      <FlightActions
        onRoute={() => {}}
        onFollow={() => {}}
        onShare={() => {}}
        onMore={() => {}}
      />
    </aside>
  );
}

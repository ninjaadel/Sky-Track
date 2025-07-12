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

  if (!flight) return null;

  return (
    <aside className=" xs:fixed xs:inset-0 xs:w-full xs:z-50
md:static md:w-[350px] md:rounded-xl md:shadow md:mt-13
bg-[var(--chart-1)] text-[var(--card-foreground)]
flex-shrink-0 md:ml-auto">
      <FlightImage flight={flight} />

      <div className="p-"></div>
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

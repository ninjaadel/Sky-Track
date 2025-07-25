import { flights } from "../../data/flight";

import { flightQueryKey } from "../../data/for-query_param";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
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
  const [isVisible, setVisible] = useState(false);
  const flight = useMemo(
    () => flights.find((f) => f.id === selectedFlight),
    [selectedFlight]
  );
   useEffect(() => {
    if (flight) {
      setVisible(true);
    }
    return () => {
      setVisible(false);
    };
  }, [flight]);


  if (!flight) return null;

  return (
    <aside className={`overflow-y-auto
    max-h-screen
  fixed top-22 left-0 right-0  w-full z-20
  md:static md:w-[350px] md:rounded-xl md:shadow md:mt-10 md:ml-auto
  bg-[var(--secondary)] text-[var(--card-foreground)]
  ${isVisible ? 'translate-x-0' : 'translate-x-full'}
  flex-shrink-0
  transition-transform duration-500 ease-in-out
`}
>
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

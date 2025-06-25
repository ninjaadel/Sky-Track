import { flights } from "../data/flight";
import { flightQueryKey } from "../data/for-query_param";

import { useSearchParams } from "react-router-dom";

export default function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(flightQueryKey);
  const flight = flights.find((f) => f.airline === selectedFlight);

  return (
    <aside
      className="absolute w-sm top-7 right-7 h-full rounded-xl bg-[#101010]"
      style={{ height: "calc(100% - 56px)" }}
    >
      {flight?.airline}

      <div
        className="w-full h-60"
        style={{
          background: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
        }}
      >
        <img
          src={flight?.airplane.logo}
          alt={flight?.airplane.logo}
          className="max-w-full h-auto"
        />
      </div>

      <div>
        <img
          src=""
          alt={flight?.logo}
          width={24}
          height={24}
          className="inline-block rounded-sm "
        />
      </div>
    </aside>
  );
}

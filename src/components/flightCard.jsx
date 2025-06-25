import { useSearchParams } from "react-router-dom";
import { flightQueryKey } from "../data/for-query_param";
import { cn } from "../../utils/cn";

export default function FlightCard({ flight, i }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(flightQueryKey);
  const isActive = selectedFlight === flight.airline;

  return (
    <div
      className={cn(
        "rounded-lg p-0.5 w-full transition-colors duration-300 ease-in-out",
        isActive
          ? "bg-gradient-to-r from-rose-500 to-orange-400"
          : "bg-transparent"
      )}
    >
      <button
        key={i}
        onClick={() => {
          setSearchParams({ [flightQueryKey]: flight.airline });
        }}
        className={cn("bg-neutral-900 rounded-lg p-5 block w-full h-full")}
      >
        {/* Üst Bilgiler */}
        <div className="flex justify-between items-center mb-7">
          <div className="flex items-center gap-3">
            <img
              src={flight.logo}
              alt={`${flight.airline} logo`}
              width={40}
              height={40}
              className="rounded-full bg-white"
            />
            <span className="text-lg">{flight.airline}</span>
          </div>
          <span className="bg-neutral-800 rounded-xl py-1 px-2 text-sm">
            {flight.flightNumber}
          </span>
        </div>

        {/* Uçuş Bilgileri */}
        <div className="flex justify-between items-center">
          {/* Nereden */}
          <div className="space-y-0.5">
            <div className="text-sm text-gray-300">{flight.from.city}</div>
            <div className="font-semibold text-3xl">{flight.from.code}</div>
          </div>
          {/* PROGRESS BAR YERİ */}
          <div className="h-1 w-16 bg-gray-500 rounded-full mx-2" />
          {/* Nereye */}
          <div className="space-y-0.5 text-right">
            <div className="text-sm text-gray-300">{flight.to.city}</div>
            <div className="font-semibold text-3xl">{flight.to.code.city}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

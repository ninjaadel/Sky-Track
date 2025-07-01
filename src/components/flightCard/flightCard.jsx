import { useSearchParams } from "react-router-dom";
import { flightQueryKey } from "../../data/for-query_param";
import { cn } from "../../../utils/cn";

export default function FlightCard({ flight, i }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(flightQueryKey);
  const isActive = selectedFlight === flight.id;

  return (
    <div
      className={cn(
        "rounded-[var(--radius)] p-0.5 w-full transition-colors duration-300 ease-in-out",
        isActive
          ? "bg-gradient-to-r from-rose-500 to-orange-400"
          : "bg-transparent"
      )}
    >
      <button
        key={i}
        onClick={() => {
          setSearchParams({ [flightQueryKey]: flight.id });
        }}
        className="bg-[color:var(--card)] text-[color:var(--card-foreground)] rounded-[var(--radius)] p-[var(--spacing-element)] block w-full h-full transition-colors duration-300"
      >
        {/* Üst Bilgi */}
        <div className="flex justify-between items-center mb-[var(--spacing-mini-element)]">
          <div className="flex items-center gap-3">
            <img
              src={flight?.logo}
              alt={`${flight?.airline.name} logo`}
              width={40}
              height={40}
              className="rounded-full bg-[color:var(--background)]"
            />
            <span className="text-lg">{flight?.id}</span>
          </div>
          <span className="bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] rounded-xl py-1 px-2 text-sm">
            {flight.aircraftReg}
          </span>
        </div>

        {/* Uçuş Bilgisi */}
        <div className="flex justify-between items-center ">
          {/* Nereden */}
          <div className="space-y-0.5">
            <div className="text-sm text-[color:var(--muted-foreground)] ">
              {flight?.from.city}
            </div>
            <div className="font-semibold text-3xl">{flight?.from.code}</div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 w-16 bg-[color:var(--border)] rounded-full mx-2" />

          {/* Nereye */}
          <div className="space-y-0.5 text-right">
            <div className="text-sm text-[color:var(--muted-foreground)]">
              {flight?.to.city}
            </div>
            <div className="font-semibold text-3xl">{flight?.to.code}</div>
          </div>
        </div>
      </button>
    </div>
  );
}

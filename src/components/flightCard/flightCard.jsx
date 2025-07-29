import { useSearchParams } from "react-router-dom";
import { flightQueryKey } from "../../data/for-query_param";
import { cn } from "../../../utils/cn";
import { FlightCardActions } from "./flightActions";
import { ProgressBar } from "../../special/progressBar";

export default function FlightCard({ flight, i }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(flightQueryKey);
  const isActive = selectedFlight === flight.flightNumber;

  return (
    <div
      className={cn(
        "rounded-[var(--radius)] p-0.5 w-full transition-colors duration-300 ease group",
        isActive
          ? "bg-gradient-to-r from-rose-500 to-orange-400"
          : "bg-transparent"
      )}
    >
      <button
        key={i}
        onClick={() => {
          setSearchParams({ [flightQueryKey]: flight.flightNumber });
        }}
        className="bg-[color:var(--card)] text-[color:var(--card-foreground)] rounded-[var(--radius)] p-3 xs:p-4 sm:p-[var(--spacing-element)] block w-full h-full transition-colors duration-300 relative"
      >
        <FlightCardActions flightId={flight.flightNumber} />

        <div className="flex justify-between items-center mb-2 xs:mb-3 sm:mb-3 pr-6 xs:pr-7 sm:pr-8">
          <div className="flex items-center gap-2 xs:gap-2 sm:gap-3">
            <img
              src={flight?.airline?.logo}
              alt={`${flight?.airline?.name} logo`}
              width={28}
              height={28}
              className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-[color:var(--background)]"
            />
            <span className="text-sm xs:text-base sm:text-lg font-medium">
              {flight?.flightNumber}
            </span>
          </div>
          <span className="bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] rounded-lg py-0.5 px-1.5 xs:py-1 xs:px-2 text-xs">
            {flight?.aircraft?.registration}
          </span>
        </div>

        {/* Uçuş Bilgisi */}
        <div className="grid grid-cols-[1fr_3fr_1fr] xs:grid-cols-[1fr_5fr_1fr] items-end gap-1 xs:gap-2 w-full">
          {/* Nereden */}
          <div className="space-y-0.5">
            <div className="text-xs xs:text-sm text-[color:var(--muted-foreground)] truncate">
              {flight?.from?.city?.length > 8
                ? flight?.from?.city.substring(0, 8) + "..."
                : flight?.from?.city}
            </div>
            <div className="font-semibold text-xl xs:text-2xl sm:text-3xl">
              {flight?.from?.code}
            </div>
          </div>

          {/* Uçak Bilgisi */}
          <div className="-translate-y-1">
            <ProgressBar flight={flight} />
            <div className="text-center mt-1 xs:mt-2">
              <span className="text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full">
                {flight?.progress || 0}% completed
              </span>
            </div>
          </div>

          {/* Nereye */}
          <div className="space-y-0.5 text-right">
            <div className="text-xs xs:text-sm text-[color:var(--muted-foreground)] truncate">
              {flight?.to?.city?.length > 8
                ? flight?.to?.city.substring(0, 8) + "..."
                : flight?.to?.city}
            </div>
            <div className="font-semibold text-xl xs:text-2xl sm:text-3xl">
              {flight?.to?.code}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

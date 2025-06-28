import { X } from "lucide-react";
import { flightQueryKey } from "../../data/for-query_param";
import { useSearchParams } from "react-router-dom";

export function FlightHeader({ flight }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className="bg-[var(--background)]  rounded-xl px-4 py-3 flex items-center justify-between
    absolute top-3 right-1 mr-[11px] w-11/12 h-max  "
    >
      <div>
        <h1 className="text-amber-400 text-xl font-medium">{flight?.id}</h1>
        <p className="text-[var(--muted-foreground)] text-sm">
          {flight?.airline.name}
        </p>
      </div>
      <button
        onClick={() => {
          searchParams.delete(flightQueryKey);
          setSearchParams(searchParams);
        }}
        className="text-[var(--destructive)] hover:text-white transition-colors
        bg-[var(--foreground)] p-1 rounded-full"
      >
        <X size={24} />
      </button>
    </div>
  );
}

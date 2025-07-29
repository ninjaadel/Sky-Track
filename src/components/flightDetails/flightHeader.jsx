import { X } from "lucide-react";
import { flightQueryKey } from "../../data/for-query_param";
import { useSearchParams } from "react-router-dom";

export function FlightHeader({ flight }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className="bg-[var(--background)]  rounded-xl px-4 py-3 flex items-center justify-between
      w-3/4  h-max absolute top-1 left-1/2 -translate-x-1/2 "
    >
      <div>
        <h1 className="text-amber-400 text-xl font-medium">{flight?.id}</h1>
        <p className="text-[var(--muted-foreground)] text-sm px-1">
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

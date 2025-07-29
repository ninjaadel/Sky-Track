import { Plane } from "lucide-react";
export function FlightRoute({ flight }) {
  return (
    <div className="grid grid-cols-2  mb-1 relative   gap-1 m-1 mx-2 rounded-tl-lg rounded-tr-lg">
      <div className="bg-[var(--card)] px-element py-element rounded-tl-xl text-center ">
        <h3 className=" text-4xl font-semibold mb-1.5 text-[var(--foreground)]">
          {flight?.from.code}
        </h3>
        <p className=" font-medium mb-1 text-lg text-[var(--card-foreground)]">
          {flight?.from.city}
        </p>
        <p className="text-[var(--foreground)] text-sm font-large">
          {flight?.from.zone}
        </p>
      </div>
      <div
        className="flex items-center justify-center mb-2 
      rounded-full w-12 h-12 absolute top-1/2 -translate-y-1/2 left-1/2
      -translate-x-1/2   "
      >
        <Plane className="text-amber-400 " size={22} />
      </div>
      <div className="bg-[var(--card)]  px-element py-element rounded-tr-xl text-center">
        <h3 className="text-[var(--foreground)] text-4xl font-semibold mb-1.5">
          {flight?.to.code}
        </h3>
        <p className="text-[var(--foreground)] font-medium mb-1 text-lg">
          {flight?.to.city}
        </p>
        <p className="text-neutral-500 text-sm font-medium">
          {flight?.to.zone}
        </p>
      </div>
    </div>
  );
}

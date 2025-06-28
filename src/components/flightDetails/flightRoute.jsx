import { Plane } from "lucide-react";
export function FlightRoute({ flight }) {
  return (
    <div className="grid grid-cols-2  mb-1 relative bg-neutral-900 gap-2 m-1 mx-2 rounded-tl-lg rounded-tr-lg">
      <div className="bg-card px-element py-element rounded-xl text-center ">
        <h3 className="text-white text-4xl font-semibold mb-1.5">
          {flight?.from.code}
        </h3>
        <p className="text-neutral-200 font-medium mb-1 text-lg">
          {flight?.from.city}
        </p>
        <p className="text-neutral-500 text-sm font-medium">
          {flight?.from.zone}
        </p>
      </div>
      <div
        className="flex items-center justify-center mb-2 bg-neutral-950
      rounded-full w-12 h-12 absolute top-1/2 -translate-y-1/2 left-1/2
      -translate-x-1/2"
      >
        <Plane className="text-amber-400" size={22} />
      </div>
      <div className="bg-card px-element py-element rounded-tr-xl text-center">
        <h3 className="text-white text-4xl font-sembolid mb-1.5">
          {flight?.to.code}
        </h3>
        <p className="text-neutral-200 font-medium mb-1 text-lg">
          {flight?.to.city}
        </p>
        <p className="text-neutral-500 text-sm font-medium">
          {flight?.to.zone}
        </p>
      </div>
    </div>
  );
}

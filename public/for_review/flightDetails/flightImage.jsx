import { FlightHeader } from "./flightHeader";

export function FlightImage({ flight }) {
  return (
    <div
      className=" h-72 pt-28 sm:rounded-t-xl relative w-full"
      style={{
        background: `linear-gradient(to top, ${flight?.colorGradient[0]},
    ${flight?.colorGradient[1]})`,
      }}
    >
      <img
        src={flight?.airplane?.image}
        alt={flight?.airplane?.name}
        className="max-w-[95%] h-auto mx-auto relative"
      />
      <FlightHeader flight={flight} />
    </div>
  );
}

import { FlightHeader } from "./flightHeader";

export function FlightImage({ flight }) {
  // Güvenlik kontrolü
  const gradient =
    flight?.colorGradient && flight.colorGradient.length >= 2
      ? `linear-gradient(to top, ${flight.colorGradient[0]}, ${flight.colorGradient[1]})`
      : "linear-gradient(to top, #1e40af, #3b82f6)"; // Varsayılan mavi gradient

  return (
    <div
      className="h-72 pt-28 sm:rounded-t-xl relative w-full"
      style={{
        background: gradient,
      }}
    >
      <img
        src={
          flight?.airplane?.image ||
          flight?.aircraft?.image ||
          "/src/assets/plane/1.png"
        }
        alt={flight?.airplane?.name || flight?.aircraft?.model || "Aircraft"}
        className="max-w-[95%] h-auto mx-auto relative"
        onError={(e) => {
          e.target.src = "/src/assets/plane/1.png"; // Fallback image
        }}
      />
      <FlightHeader flight={flight} />
    </div>
  );
}

import { ProgressBar } from "../../special/progressBar";

export function FlightStatus({ flight }) {
  // Hesaplama fonksiyonları
  const calculateEstimatedFlightTime = () => {
    if (
      flight?.schedule?.scheduledDeparture &&
      flight?.schedule?.scheduledArrival
    ) {
      const dep = new Date(flight.schedule.scheduledDeparture);
      const arr = new Date(flight.schedule.scheduledArrival);
      const diffHours = Math.round((arr - dep) / (1000 * 60 * 60));
      return `${diffHours}h`;
    }
    return "2h 30m"; // Default
  };

  const calculateDistance = () => {
    // Mock distance calculation
    return Math.floor(1200 + Math.random() * 2000);
  };

  const calculateRemainingDistance = () => {
    const total = calculateDistance();
    const progress = flight?.progress || 0;
    return Math.floor((total * (100 - progress)) / 100);
  };

  const calculateRemainingTime = () => {
    const totalTime = 150; // 2.5 hours in minutes
    const progress = flight?.progress || 0;
    return Math.floor((totalTime * (100 - progress)) / 100);
  };

  return (
    <div>
      <div className="mx-3 my-3">
        <ProgressBar flight={flight} />
      </div>
      <div className="flex justify-between gap-2">
        <div className="mx-3">
          <span className="text-sm text-muted-foreground">Flight Time: </span>
          <span className="font-semibold">
            {calculateEstimatedFlightTime()}
          </span>
          <br />
          <span className="text-sm text-muted-foreground">Distance: </span>
          <span className="font-semibold">{calculateDistance()} km</span>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground">Remaining: </span>
          <span className="font-semibold">
            {calculateRemainingDistance()} km
          </span>
          <br />
          <span className="text-sm text-muted-foreground">Time Left: </span>
          <span className="font-semibold">{calculateRemainingTime()} min</span>
        </div>
      </div>
    </div>
  );
}

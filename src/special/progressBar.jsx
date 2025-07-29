import { Plane } from "lucide-react";
import { useTheme } from "../providers/useTheme";

function calculateProgress(flight) {
  // Eğer progress özelliği varsa onu kullan
  if (flight?.progress !== undefined) {
    return flight.progress;
  }
  
  // Yoksa schedule bilgilerinden hesapla
  if (flight?.schedule) {
    const dep = new Date(`2024-01-01 ${flight.schedule.actualDeparture || flight.schedule.scheduledDeparture}`);
    const arr = new Date(`2024-01-01 ${flight.schedule.estimatedArrival || flight.schedule.scheduledArrival}`);
    const now = new Date();

    if (now < dep) return 0;
    if (now > arr) return 100;

    const totalTime = arr - dep;
    const passedTime = now - dep;

    return Math.round((passedTime / totalTime) * 100);
  }
  
  // Varsayılan olarak 0 döndür
  return 0;
}

export function ProgressBar({ flight }) {
  const percentage = calculateProgress(flight);
  const { theme } = useTheme();
  const fillColor = theme === "dark" ? "#fff" : "#000"; // dark'ta beyaz, light'ta siyah

  return (
    <div className="w-full h-1 bg-gray-200 rounded-full dark:bg-gray-700 my-2">
      <div
        className="h-full rounded-full relative bg-gradient-to-r from-rose-800 to-orange-400 opacity-80 transition-all duration-600"
        style={{ width: `${percentage}%` }}
      >
        <Plane
          fill={fillColor}
          strokeWidth={0}
          className="rotate-45 absolute -top-2 w-5 h-5 right-0.5 translate-x-1/2"
        />
      </div>
    </div>
  );
}

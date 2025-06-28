import React from "react";
export function FlightStatus() {
  return (
    <div className="flex justify-between text-sm opacity-70 p-2 text-[--status-foreground] bg-[var(--status)] mx-2 mb-1">
      <div>
        <span>2 715km</span>
        <span className="mx-2">
          <span>3h 1m</span>
        </span>
      </div>
      <div>
        <span>882 km</span>
        <span className="mx-2">
          <span>59 min</span>
        </span>
      </div>
    </div>
  );
}

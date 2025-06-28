import { MoreHorizontal, Route } from "lucide-react";
// import { MapPin } from "../animate-ui/icons/map-pin";
// import { SquareArrowOutUpRight } from "../animate-ui/icons/square-arrow-out-up-right";
import { MapPin, SquareArrowOutUpRight } from "lucide-react";
export function FlightActions({ onRoute, onFollow, onShare, onMore }) {
  return (
    <div className="grid grid-cols-4 gap-2  bg-[var(--card)] text-[var(--card-foreground)] py-2 mx-2 mb-2 rounded-xl">
      <button
        onClick={onRoute}
        className="flex flex-col items-center align-center gap-1  transition-colors hover:bg-[var(--background)] "
      >
        <Route size={22} />
        <span>Route</span>
      </button>

      <button
        onClick={onFollow}
        className="flex flex-col items-center gap-2  transition-colors hover:bg-[var(--background)]"
      >
        <MapPin animateOnHover size={22} />
        <span>Follow</span>
      </button>

      <button
        onClick={onShare}
        className="flex flex-col items-center gap-2 hover:bg-[var(--background)]"
      >
        <SquareArrowOutUpRight size={22} />
        <span>Share</span>
      </button>

      <button
        onClick={onMore}
        className="flex flex-col items-center gap-2 transition-colors hover:bg-[var(--background)]"
      >
        <MoreHorizontal size={22} />
        <span>More</span>
      </button>
    </div>
  );
}

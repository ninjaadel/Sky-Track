import { MoreHorizontal, Route } from "lucide-react";
// import { MapPin } from "../animate-ui/icons/map-pin";
// import { SquareArrowOutUpRight } from "../animate-ui/icons/square-arrow-out-up-right";
import { MapPin, SquareArrowOutUpRight } from "lucide-react";
export function FlightActions({ onRoute, onFollow, onShare, onMore }) {
  return (
    <div className="grid grid-cols-4 gap-1  bg-neutral-900 pb-2">
      <button
        onClick={onRoute}
        className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element rounded-tl-2xl rounded-bl-2xl transition-colors hover:bg-neutral-800 "
      >
        <Route size={22} />
        <span>Route</span>
      </button>

      <button
        onClick={onFollow}
        className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800"
      >
        <MapPin animateOnHover size={22} />
        <span>Follow</span>
      </button>

      <button
        onClick={onShare}
        className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element transition-colors hover:bg-neutral-800"
      >
        <SquareArrowOutUpRight size={22} />
        <span>Share</span>
      </button>

      <button
        onClick={onMore}
        className="flex flex-col items-center gap-2 bg-card px-mini-element py-mini-element rounded-tr-2xl rounded-br-2xl transition-colors hover:bg-neutral-800"
      >
        <MoreHorizontal size={22} />
        <span>More</span>
      </button>
    </div>
  );
}

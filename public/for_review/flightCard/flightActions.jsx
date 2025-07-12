import { Heart } from "lucide-react";
import { Button } from "../../../src/components/ui/button";
import { useAppDispatch } from "../../../src/hooks/useAppDispach";
import useAppSelector from "../../../src/hooks/useAppSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../../src/store/favorites/favorites.slice";
import { useCallback } from "react";

export function FlightCardActions({ flightId }) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites); // <-- düzeltildi
  const isFavorite = favorites.includes(flightId);

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavorite(flightId));
    } else {
      dispatch(addFavorite(flightId));
    }
  }, [dispatch, flightId, isFavorite]);

  return (
    <div className="z-50 flex flex-col gap-2 absolute -top-0.5 opacity-0 group-hover:opacity-100 -right-1 transition-all duration-500 group-hover:sm:-right-14 scale-0 group-hover:scale-100 px-2 h-full origin-top sm:origin-top sm:-right-14 ">
      <Button
        onClick={toggleFavorite}
        asChild
        variant="ghost"
        className="p-2 rounded-2xl"
      >
        <Heart
          fill={isFavorite ? "red" : "none"}
          className="text-[var(--foreground)] size-10"
        />
      </Button>
    </div>
  );
}

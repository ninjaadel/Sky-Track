import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "../../hooks/useAppDispach";
import useAppSelector from "../../hooks/useAppSelector";
import {
  addFavorite,
  removeFavorite,
} from "../../store/favorites/favorites.slice";
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
    <div className="z-50 flex flex-col gap-2 absolute top-1 opacity-100 right-1 transition-all duration-500 scale-100 px-1 origin-top">
      <Button
        onClick={toggleFavorite}
        asChild
        variant="ghost"
        className="p-1 xs:p-1.5 rounded-xl w-6 h-6 xs:w-7 xs:h-7 sm:w-7 sm:h-7"
      >
        <Heart
          fill={isFavorite ? "red" : "none"}
          className="text-[var(--foreground)] w-4 h-4 xs:w-4 xs:h-4 sm:w-4 sm:h-4"
        />
      </Button>
    </div>
  );
}

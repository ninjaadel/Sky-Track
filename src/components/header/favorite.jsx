import useAppSelector from "../../hooks/useAppSelector";
import { flights } from "../../data/flight";
import FlightCard from "../flightCard/flightCard";

export default function FavoriteList() {
  const favorites = useAppSelector((state) => state.favorites);

  // Favori ID'lerine göre uçuşları bul
  const favoriteFlights = flights.filter((flight) =>
    favorites.includes(flight?.id)
  );

  return (
    <div className="p-4 grid grid-cols-1 gap-4 mb-2 w-sm  h-full block w-1/3 mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Favories</h2>
      {favoriteFlights.length === 0 && <div>Hiç favori uçuş yok.</div>}
      {favoriteFlights.map((flight, i) => (
        <FlightCard flight={flight} className="" key={i}>
          <div>favories</div>
        </FlightCard>
      ))}
    </div>
  );
}

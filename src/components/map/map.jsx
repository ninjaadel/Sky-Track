import { useSearchParams } from "react-router-dom";
import { flights } from "../../data/flight";
import { FlightPath } from "./flightPath";
import { MapContainer, TileLayer } from "react-leaflet";

import apiKey from "../../../apikey/apiKey"; // Import your API key
 // Use the API key from your config

function MyMap({ theme }) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("flight"); // Get flight ID from URL parameters
  const flight = flights.find(f => f.id === id);

  const tileUrl = theme === "dark"
    ? `https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=${apiKey}`
    : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${apiKey}`;

  const center = flight ? flight.coords.from : [42.695, 23.408333];

  return (
    <MapContainer center={center} zoom={4} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url={tileUrl} />
      {flight && (
        <FlightPath
          from={flight.coords.from}
          to={flight.coords.to}
          fromCity={flight.from.city}
          toCity={flight.to.city}
          color="red"
        />
      )}
    </MapContainer>
  );
}

export default MyMap;
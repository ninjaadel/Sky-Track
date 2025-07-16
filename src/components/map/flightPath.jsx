
import { Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export function FlightPath({ from, to, fromCity, toCity, color = "red" }) {
  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

  return (
    <>
      <Marker position={from} icon={icon}>
        <Popup>{fromCity}</Popup>
      </Marker>
      <Marker position={to} icon={icon}>
        <Popup>{toCity}</Popup>
      </Marker>
      <Polyline positions={[from, to]} pathOptions={{ color, weight: 4 }} />
    </>
  );
}
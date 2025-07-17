
import { Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export function FlightPath({ from, to, fromCity, toCity, color = "#ccc" , opacity = 0.5, dashArray = "5, 10" }) {
  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", 
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
  const polylineOptions = {
    color: color,
    weight: 1,
    dashArray: dashArray,
  };
  const progressIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // istediğin icon
  iconSize: [24, 24],
  iconAnchor: [12, 24],
}); 
  return (
    <>

    
      <Marker position={to} icon={icon}>
        <Popup>{toCity}</Popup>
      </Marker>
      <Polyline positions={[from, to]} pathOptions={polylineOptions}  />
    </>
  );
}
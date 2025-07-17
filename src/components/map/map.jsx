import { useSearchParams } from "react-router-dom";
import { flights } from "../../data/flight";
import { FlightPath } from "./flightPath";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet/hooks";
import { FlightPathProgress } from "./MapProgress";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Plane from "../../assets/plane/planeIconMap.png";
import "leaflet-rotatedmarker";
import apiKey from "../../../apikey/apiKey";

function MapCenterUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}
function FitBoundsDynamic({ from, to }) {
  const map = useMap();
  useEffect(() => {
    if (from && to) {
      const bounds = L.latLngBounds([from, to]);
      map.flyToBounds(bounds, { duration: 2, easeLinearity: 0.25 });
    }
  }, [from, to, map]);
  return null;
}

function MyMap({ theme }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("flight");
  const flight = flights.find(f => f.id === id);

  const getProgressPosition = (from, to, progress) => [
    from[0] + (to[0] - from[0]) * (progress / 100),
    from[1] + (to[1] - from[1]) * (progress / 100)
  ];

  const progressBarWidth = flight
    ? [flight.coords.from, getProgressPosition(flight.coords.from, flight.coords.to, flight.progress)]
    : [];

  const tileUrl = theme === "dark"
    ? `https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=${apiKey}`
    : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${apiKey}`;

  const center = flight
    ? [(flight.coords.from[0] + flight.coords.to[0]) / 2, (flight.coords.from[1] + flight.coords.to[1]) / 2]
    : [42.695, 23.408333];

  const flightPathCoords = flight
    ? [getProgressPosition(flight.coords.from, flight.coords.to, flight.progress), flight.coords.to]
    : [];

  const progressIcon = new L.Icon({
    iconUrl: Plane,
    iconSize: [50, 50],
    iconAnchor: [20, 20],
    rotationAngle: 120,
  });

  return (
    <MapContainer center={center} zoom={3} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url={tileUrl} />
      {flight
        ? <FitBoundsDynamic from={flight.coords.from} to={flight.coords.to} />
        : <MapCenterUpdater center={center} />
      }

      {/* Tüm uçuşların mevcut konumuna küçük Marker ekle */}
      {flights.map(f => (
        <Marker
          key={f.id}
          position={getProgressPosition(f.coords.from, f.coords.to, f.progress)}
          icon={progressIcon}
          eventHandlers={{
            click: () => setSearchParams({ flight: f.id })
          }}
        />
      ))}

      {/* Seçili uçuş varsa rotayı ve büyük Marker'ı göster */}
      {flight && (
        <>
          <FlightPathProgress progressBarWidth={progressBarWidth} />
          <Marker
            position={getProgressPosition(flight.coords.from, flight.coords.to, flight.progress)}
            icon={progressIcon}
            
          />
          <FlightPath
            from={flightPathCoords[0]}
            to={flightPathCoords[1]}
            fromCity={flight.from.city}
            toCity={flight.to.city}
            color="#888"
            opacity={0.5}
            dashArray="5, 10"
          />
        </>
      )}
    </MapContainer>
  );
}

export default MyMap;
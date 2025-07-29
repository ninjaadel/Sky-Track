import { useSearchParams } from "react-router-dom";
import { flightQueryKey } from "../../data/for-query_param";
import FlightPath, { getCurvedProgressPosition } from "./flightPath";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import { Marker } from "react-leaflet";
import Plane from "../../assets/plane/logo.svg";
import "leaflet-rotatedmarker";
import apiKey from "../../../apikey/apiKey";
import { MapFallback } from "./MapFallback";
import { useState } from "react";
import MapLoading from "./MapLoading";
import { useFlights } from "../../data/flight";
function MapCenterUpdater({ center }) {
  const [tileError, setTileError] = useState(false);

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
  const { flights } = useFlights();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tileError, setTileError] = useState(false);
  const [loading, setLoading] = useState(false);
  const id = searchParams.get("flight");
  const flight = flights.find((f) => f.id === id);

  const calculateBearing = (from, to) => {
    const lat1 = (from[0] * Math.PI) / 180;
    const lat2 = (to[0] * Math.PI) / 180;
    const deltaLng = ((to[1] - from[1]) * Math.PI) / 180;

    const x = Math.sin(deltaLng) * Math.cos(lat2);
    const y =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

    return ((Math.atan2(x, y) * 180) / Math.PI + 360) % 360;
  };

  const getProgressPosition = (from, to, progress) => [
    from[0] + (to[0] - from[0]) * (progress / 100),
    from[1] + (to[1] - from[1]) * (progress / 100),
  ];

  const tileUrl =
    theme === "dark"
      ? `https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=${apiKey}`
      : `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${apiKey}`;

  const center = flight
    ? [
        (flight.coords.from[0] + flight.coords.to[0]) / 2,
        (flight.coords.from[1] + flight.coords.to[1]) / 2,
      ]
    : [42.695, 23.408333];

  const flightPathCoords = flight
    ? [
        getProgressPosition(
          flight.coords.from,
          flight.coords.to,
          flight.progress
        ),
        flight.coords.to,
      ]
    : [];

  const progressIcon = new L.Icon({
    iconUrl: Plane,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    rotationOrigin: "center",
  });

  if (tileError) {
    return <MapFallback />;
  }
  if (loading) {
    return <MapLoading />;
  }
  return (
    <MapContainer
      center={center}
      zoom={3}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url={tileUrl}
        eventHandlers={{
          load: () => setLoading(false),
          tileerror: () => setTileError(true),
        }}
      />
      {flight ? (
        <FitBoundsDynamic from={flight.coords.from} to={flight.coords.to} />
      ) : (
        <MapCenterUpdater center={center} />
      )}

      {flights.map((f) => {
        const bearing = calculateBearing(f.coords.from, f.coords.to);
        const rotatedIcon = new L.Icon({
          iconUrl: Plane,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          rotationAngle: bearing + 180,
        });

        // Curved path üzerinde doğru pozisyon hesapla
        const curvedPosition = getCurvedProgressPosition(
          f.coords.from,
          f.coords.to,
          f.progress
        );

        return (
          <Marker
            key={f.id}
            position={curvedPosition}
            icon={rotatedIcon}
            opacity={0.6}
            eventHandlers={{
              click: () => setSearchParams({ flight: f.id }),
            }}
          />
        );
      })}

      {/* Seçili uçuş varsa rotayı ve büyük Marker'ı göster */}
      {flight && flight.coords?.from && flight.coords?.to && (
        <>
          <Marker
            position={getCurvedProgressPosition(
              flight.coords.from,
              flight.coords.to,
              flight.progress
            )}
            icon={progressIcon}
          />
          <FlightPath
            from={flight.coords.from}
            to={flight.coords.to}
            fromCity={flight.from?.city || "Unknown"}
            toCity={flight.to?.city || "Unknown"}
            progress={flight.progress || 0}
            showProgress={true}
          />
        </>
      )}
    </MapContainer>
  );
}

export default MyMap;

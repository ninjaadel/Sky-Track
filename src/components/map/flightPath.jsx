import { Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Curved path hesaplama fonksiyonu - diğer component'ler için export
export const createCurvedPath = (from, to) => {
  const midLat = (from[0] + to[0]) / 2;
  const midLng = (from[1] + to[1]) / 2;

  const latDiff = Math.abs(from[0] - to[0]);
  const lngDiff = Math.abs(from[1] - to[1]);
  const curveOffset = Math.max(latDiff, lngDiff) * 0.3;

  const curvePoints = [];
  const segments = 20;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const invT = 1 - t;

    const lat =
      invT * invT * from[0] +
      2 * invT * t * (midLat + curveOffset) +
      t * t * to[0];
    const lng = invT * invT * from[1] + 2 * invT * t * midLng + t * t * to[1];

    curvePoints.push([lat, lng]);
  }

  return curvePoints;
};

export const getCurvedProgressPosition = (from, to, progress) => {
  const curvedPath = createCurvedPath(from, to);
  const progressIndex = Math.floor((progress / 100) * (curvedPath.length - 1));
  const safeIndex = Math.min(Math.max(progressIndex, 0), curvedPath.length - 1);
  return curvedPath[safeIndex];
};

export default function FlightPath({
  from,
  to,
  fromCity,
  toCity,
  color = "#ccc",
  opacity = 0.5,
  dashArray = "5, 10",
  progress = 0,
  showProgress = false,
}) {
  const icon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [3, 3],
    iconAnchor: [1, 0],
  });

  const curvedPath = createCurvedPath(from, to);

  // Progress'e göre path'i böl
  const progressIndex = Math.floor((progress / 100) * (curvedPath.length - 1));
  const completedPath = curvedPath.slice(0, Math.max(1, progressIndex + 1));
  const remainingPath = curvedPath.slice(progressIndex);

  const polylineOptions = {
    color: color,
    weight: 3,
    opacity: opacity,
    smoothFactor: 3,
    dashArray: dashArray,
  };

  const progressOptions = {
    color: "#FF0000",
    weight: 4,
    opacity: 1,
    smoothFactor: 3,
  };

  const remainingOptions = {
    color: "#9ca3af",
    weight: 2,
    opacity: 0.6,
    smoothFactor: 3,
    dashArray: "8, 12",
  };

  return (
    <>
      <Marker position={from} icon={icon}>
        <Popup>{fromCity} (Departure)</Popup>
      </Marker>
      <Marker position={to} icon={icon}>
        <Popup>{toCity} (Arrival)</Popup>
      </Marker>

      {showProgress ? (
        <>
          {/* Completed portion - kırmızı */}
          {completedPath.length > 1 && (
            <Polyline positions={completedPath} pathOptions={progressOptions} />
          )}
          {/* Remaining portion - gri aralıklı */}
          {remainingPath.length > 1 && (
            <Polyline
              positions={remainingPath}
              pathOptions={remainingOptions}
            />
          )}
        </>
      ) : (
        /* Normal curved path */
        <Polyline positions={curvedPath} pathOptions={polylineOptions} />
      )}
    </>
  );
}

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const position = [42.695, 23.408333];
const position2 = [39.511944, 116.410556];



function MyMap({ theme }) {
  const apiKey = 'jSpcWmLa8abU9OGnq6OB';
  const position = [42.695, 23.408333];
  const position2 = [39.511944, 116.410556];

  const tileStyle = theme === 'dark'
    ? `https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.png?key=${apiKey}`
    : `https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=${apiKey}`;

  return (
    <MapContainer center={position} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        key={theme} // <-- Buraya dikkat!
        url={tileStyle}
        attribution='&copy; MapTiler &copy; OpenStreetMap contributors'
      />
      <Marker position={position2} icon={new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
      })}>
        <Popup>Pekin</Popup>
      </Marker>
      <Marker position={position} icon={new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
      })}>
        <Popup>Sofya</Popup>
      </Marker>
    </MapContainer>
  );
}


export default MyMap;

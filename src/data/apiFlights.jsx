import { useState, useEffect } from 'react';

// Aviation Stack API yapılandırması
const API_KEY = 'e9f8ebb708bb1047096f2cdb33d71f79';
const API_BASE_URL = 'http://api.aviationstack.com/v1';

// Uçak görselleri ve airline logoları
const AIRLINE_LOGOS = {
  'Turkish Airlines': '/src/assets/logo/1.svg',
  'Lufthansa': '/src/assets/logo/2.svg',
  'Emirates': '/src/assets/logo/3.svg',
  'Qatar Airways': '/src/assets/logo/4.svg',
  'British Airways': '/src/assets/logo/5.svg',
};

const AIRCRAFT_IMAGES = {
  'Boeing 777': '/src/assets/plane/1.png',
  'Airbus A320': '/src/assets/plane/2.png',
  'Boeing 737': '/src/assets/plane/3.png',
  'Airbus A330': '/src/assets/plane/4.png',
  'Boeing 787': '/src/assets/plane/5.png',
};

// Varsayılan uçak resmi
const DEFAULT_AIRCRAFT_IMAGE = '/src/assets/plane/1.png';

// Flight progress hesaplama
function calculateProgress(scheduled_departure, scheduled_arrival, actual_departure) {
  if (!scheduled_departure || !scheduled_arrival) return 0;
  
  const depTime = new Date(scheduled_departure).getTime();
  const arrTime = new Date(scheduled_arrival).getTime();
  const currentTime = actual_departure ? new Date(actual_departure).getTime() : Date.now();
  
  if (currentTime <= depTime) return 0;
  if (currentTime >= arrTime) return 100;
  
  const totalDuration = arrTime - depTime;
  const elapsed = currentTime - depTime;
  
  return Math.round((elapsed / totalDuration) * 100);
}

// API verisini uygulama formatına dönüştürme
function transformLiveFlightData(apiFlights) {
  return apiFlights.map((flight, index) => {
    const airlineName = flight.airline?.name || 'Unknown Airline';
    const aircraftType = flight.aircraft?.iata || 'Unknown Aircraft';
    
    return {
      id: flight.flight?.iata || `flight-${index}`,
      flightNumber: flight.flight?.iata || flight.flight?.icao || `FL${index}`,
      airline: {
        name: airlineName,
        logo: AIRLINE_LOGOS[airlineName] || '/src/assets/logo/1.svg',
        country: flight.airline?.country || 'Unknown'
      },
      aircraft: {
        type: aircraftType,
        registration: flight.aircraft?.registration || `N/A`,
        image: AIRCRAFT_IMAGES[aircraftType] || DEFAULT_AIRCRAFT_IMAGE
      },
      departure: {
        airport: flight.departure?.airport || 'Unknown Airport',
        iata: flight.departure?.iata || 'XXX',
        city: flight.departure?.timezone || 'Unknown City',
        scheduled: flight.departure?.scheduled || new Date().toISOString(),
        actual: flight.departure?.actual || flight.departure?.estimated || null,
        terminal: flight.departure?.terminal || 'N/A',
        gate: flight.departure?.gate || 'N/A'
      },
      arrival: {
        airport: flight.arrival?.airport || 'Unknown Airport',
        iata: flight.arrival?.iata || 'XXX',
        city: flight.arrival?.timezone || 'Unknown City',
        scheduled: flight.arrival?.scheduled || new Date().toISOString(),
        estimated: flight.arrival?.estimated || flight.arrival?.actual || null,
        terminal: flight.arrival?.terminal || 'N/A',
        gate: flight.arrival?.gate || 'N/A'
      },
      status: flight.flight_status || 'scheduled',
      coordinates: {
        latitude: flight.live?.latitude || (40.97 + Math.random() * 10),
        longitude: flight.live?.longitude || (28.82 + Math.random() * 10),
        altitude: flight.live?.altitude || Math.floor(Math.random() * 35000) + 5000,
        speed: flight.live?.speed_horizontal || Math.floor(Math.random() * 500) + 200
      },
      progress: calculateProgress(
        flight.departure?.scheduled,
        flight.arrival?.scheduled,
        flight.departure?.actual || flight.departure?.estimated
      ),
      duration: flight.flight?.duration || '2h 30m',
      price: Math.floor(Math.random() * 500) + 200 // Mock price
    };
  });
}

// API flights hook'u
export function useApiFlights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `${API_BASE_URL}/flights?access_key=${API_KEY}&limit=20&flight_status=active`
        );
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Debug için
        
        if (data.data && Array.isArray(data.data)) {
          const transformedFlights = transformLiveFlightData(data.data);
          setFlights(transformedFlights);
        } else {
          console.warn('Unexpected API response structure:', data);
          setFlights([]);
        }
      } catch (err) {
        console.error('API Fetch Error:', err);
        setError(err.message);
        setFlights([]); // Fallback to empty array
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return { flights, loading, error };
}

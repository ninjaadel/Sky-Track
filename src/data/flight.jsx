import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { logo, Plane, Flags } from "../constans/images";

const API_KEY = import.meta.env.VITE_AVIATION_API_KEY;
const API_BASE_URL = "https://api.aviationstack.com/v1";

const getFlightProgress = (
  scheduledDeparture,
  actualDeparture,
  scheduledArrival,
  estimatedArrival,
  index = 0 // Test için index ekledik
) => {
  // TEST AMAÇLI: Farklı progress değerleri
  const testProgressValues = [15, 25, 40, 55, 70, 85, 30, 60, 45, 80];
  return testProgressValues[index % testProgressValues.length];

  /*
  // GERÇEK KOD (test bitince bu açılacak):
  if (!scheduledDeparture || !scheduledArrival) {
    return Math.floor(Math.random() * 80) + 10;
  }

  const now = new Date();
  const actualDep = new Date(actualDeparture || scheduledDeparture);
  const arr = new Date(estimatedArrival || scheduledArrival);
  const total = arr - actualDep;
  const elapsed = now - actualDep;
  const progress = Math.min(Math.max((elapsed / total) * 100, 0), 100);

  return isNaN(progress)
    ? Math.floor(Math.random() * 60) + 20
    : Math.round(progress);
  */
};

export const useFlights = () => {
  // API fetch fonksiyonu
  const fetchFlightsFromAPI = async () => {
    const res = await fetch(
      `${API_BASE_URL}/flights?access_key=${API_KEY}&limit=50`
    );

    if (!res.ok) {
      throw new Error("API çağrısı başarısız");
    }

    const data = await res.json();
    console.log("Full API Response:", data);

    if (!Array.isArray(data.data)) {
      throw new Error("Veri formatı hatalı");
    }

    // Live data filter'ını kaldıralım, tüm aktif uçuşları alalım
    const activeFlights = data.data.filter(
      (f) => f.flight_status === "active" || f.flight_status === "scheduled"
    );
    console.log("Active flights:", activeFlights.length);

    return transformLiveFlightData(
      activeFlights.length > 0 ? activeFlights : data.data.slice(0, 10)
    );
  };

  // Tanstack Query hook
  const {
    data: apiFlights = [],
    isLoading,
    error,
    refetch,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["flights"],
    queryFn: fetchFlightsFromAPI,
    refetchInterval: 5 * 60 * 1000, // 5 dakikada bir otomatik yenile
    staleTime: 2 * 60 * 1000, // 2 dakika boyunca fresh kabul et
    cacheTime: 10 * 60 * 1000, // 10 dakika cache'de tut
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  return {
    flights: apiFlights,
    loading: isLoading,
    error: error?.message,
    lastUpdated: dataUpdatedAt,
    refetch,
  };
};

// API verisini transform eden fonksiyon
const transformLiveFlightData = (apiFlights) => {
  return apiFlights.map((flight, index) => ({
    // Temel bilgiler
    id: flight.flight?.iata || flight.flight?.icao || `flight-${index}`,
    flightNumber: flight.flight?.iata || flight.flight?.icao || `FL${index}`,

    // Airline bilgileri
    airline: {
      name: flight.airline?.name || "Unknown Airline",
      country: flight.airline?.country || "Unknown",
      logo: logo.turkish, // Şimdilik sabit logo
    },

    // Aircraft bilgileri (hem API hem mock format için)
    aircraft: {
      type: flight.aircraft?.iata || "Unknown Type",
      model: flight.aircraft?.iata || "Unknown Aircraft", // FlightImage için
      registration: flight.aircraft?.registration || "N/A",
      image: Plane.s7, // FlightImage için
      capacity: "180", // Mock capacity
    },

    // Departure bilgileri (hem API hem mock format için)
    from: {
      airport: flight.departure?.airport || "Unknown Airport",
      city: flight.departure?.airport || "Unknown",
      code: flight.departure?.iata || "XXX",
      country: "Unknown", // API'de country yok, şimdilik sabit
      timezone: flight.departure?.timezone || "unknown",
    },
    departure: {
      airport: flight.departure?.airport || "Unknown Airport",
      iata: flight.departure?.iata || "XXX",
      city: flight.departure?.airport || "Unknown",
      scheduled: flight.departure?.scheduled,
      actual: flight.departure?.actual,
    },

    // Arrival bilgileri (hem API hem mock format için)
    to: {
      airport: flight.arrival?.airport || "Unknown Airport",
      city: flight.arrival?.airport || "Unknown",
      code: flight.arrival?.iata || "XXX",
      country: "Unknown", // API'de country yok, şimdilik sabit
      timezone: flight.arrival?.timezone || "unknown",
    },
    arrival: {
      airport: flight.arrival?.airport || "Unknown Airport",
      iata: flight.arrival?.iata || "XXX",
      city: flight.arrival?.airport || "Unknown",
      scheduled: flight.arrival?.scheduled,
      estimated: flight.arrival?.estimated,
    },

    // Koordinat bilgileri (Map component için gerekli format)
    coords: {
      from: [
        // Departure koordinatları - her uçuş için farklı havalimanları
        flight.departure?.latitude || 35 + index * 3 + Math.random() * 5, // Çeşitli başlangıç noktaları
        flight.departure?.longitude || 25 + index * 5 + Math.random() * 10,
      ],
      to: [
        // Arrival koordinatları - her uçuş için farklı varış noktaları
        flight.arrival?.latitude || 40 + index * 2 + Math.random() * 8, // Çeşitli varış noktaları
        flight.arrival?.longitude || 10 + index * 4 + Math.random() * 15,
      ],
      current: [
        // Gerçek uçuş pozisyonu veya interpolated pozisyon
        flight.live?.latitude || 35 + index * 3 + Math.random() * 5,
        flight.live?.longitude || 25 + index * 5 + Math.random() * 10,
      ],
    },
    coordinates: {
      latitude: flight.live?.latitude || 40.97 + Math.random() * 10,
      longitude: flight.live?.longitude || 28.82 + Math.random() * 10,
    },

    // Diğer bilgiler
    status: flight.flight_status || "scheduled",
    progress: getFlightProgress(
      flight.departure?.scheduled,
      flight.departure?.actual,
      flight.arrival?.scheduled,
      flight.arrival?.estimated,
      index // Test için index ekledik
    ),

    // UI için gerekli özellikler (FlightImage için)
    colorGradient: ["#1e40af", "#3b82f6"], // Mavi gradient

    // Eski format için gerekli alanlar
    logo: logo.turkish,
    airlineCountryFlag: Flags.turkey || null,
    aircraftReg: flight.aircraft?.registration || "N/A",
    airplane: {
      image: Plane.turkish,
      name: flight.aircraft?.iata || "Unknown Type",
    },
    route: {
      speed: flight.live?.speed_horizontal || 0,
      altitude: flight.live?.altitude || 0,
      direction: flight.live?.direction || 0,
    },
    schedule: {
      scheduledDeparture: flight.departure?.scheduled,
      actualDeparture: flight.departure?.actual,
      scheduledArrival: flight.arrival?.scheduled,
      estimatedArrival: flight.arrival?.estimated,
      status: flight.flight_status || "belirsiz",
    },
  }));
};

// Kalan süreyi hesaplayan utility fonksiyonu
export function calculateRemainingTime(flight) {
  if (!flight?.schedule?.estimatedArrival) return null;

  const now = new Date();
  const today = now.toISOString().split("T")[0]; // Bugünün tarihi
  const arrivalTime = new Date(
    `${today}T${flight.schedule.estimatedArrival}:00`
  );

  // Eğer varış saati geçmişte ise, yarın olarak kabul et
  if (arrivalTime < now) {
    arrivalTime.setDate(arrivalTime.getDate() + 1);
  }

  const diffMs = arrivalTime - now;
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const remainingMinutes = diffMinutes % 60;

  if (diffMinutes < 0) return "İndi";
  if (diffMinutes < 60) return `${diffMinutes} dk sonra`;
  if (diffHours === 1) return `1 saat ${remainingMinutes} dk sonra`;
  return `${diffHours} saat ${remainingMinutes} dk sonra`;
}

// Progress'e göre kalan süreyi tahmin eden fonksiyon
export function calculateRemainingTimeByProgress(flight) {
  if (!flight?.progress || flight.progress >= 100) return "İndi";

  const remainingProgress = 100 - flight.progress;

  // Ortalama uçuş süresini tahmin et (örnek: Istanbul-London ~4 saat = 240 dk)
  const estimatedTotalMinutes = getEstimatedFlightDuration(
    flight.from?.code,
    flight.to?.code
  );
  const remainingMinutes = Math.round(
    (remainingProgress / 100) * estimatedTotalMinutes
  );

  const hours = Math.floor(remainingMinutes / 60);
  const minutes = remainingMinutes % 60;

  if (remainingMinutes < 60) return `${remainingMinutes} dk sonra`;
  if (hours === 1) return `1 saat ${minutes} dk sonra`;
  return `${hours} saat ${minutes} dk sonra`;
}

// Basit mesafe tahmini (gerçek API'de daha doğru olacak)
function getEstimatedFlightDuration(fromCode, toCode) {
  const durations = {
    "IST-LHR": 240, // Istanbul-London
    "FRA-JFK": 480, // Frankfurt-New York
    "DUB-BCN": 140, // Dublin-Barcelona
    "SVO-NRT": 600, // Moscow-Tokyo
    "ZUR-DXB": 360, // Zurich-Dubai
    "LHR-SYD": 1200, // London-Sydney
    "CDG-CAI": 280, // Paris-Cairo
    "DXB-LAX": 900, // Dubai-Los Angeles
  };

  const key = `${fromCode}-${toCode}`;
  return durations[key] || 300; // Varsayılan 5 saat
}

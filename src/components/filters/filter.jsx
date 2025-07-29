import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function Filter({
  fromCountry,
  setFromCountry,
  toCountry,
  setToCountry,
  flights = [],
}) {
  // FROM Airport kodlarını çıkar
  const fromAirports = [
    ...new Set(flights.map((flight) => flight?.from?.code).filter(Boolean)),
  ];

  // TO Airport kodlarını çıkar
  const toAirports = [
    ...new Set(flights.map((flight) => flight?.to?.code).filter(Boolean)),
  ];

  return (
    <div className="bg-card w-full flex justify-between gap-2 mb-2 mt-1 rounded-lg p-2">
      <Select
        onValueChange={(value) =>
          setFromCountry(value === "all" ? null : value)
        }
        value={fromCountry}
      >
        <SelectTrigger className="text-xs xs:text-sm">
          <SelectValue placeholder="From Airport" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Airports</SelectItem>
          {fromAirports.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => setToCountry(value === "all" ? null : value)}
        value={toCountry}
      >
        <SelectTrigger className="text-xs xs:text-sm">
          <SelectValue placeholder="To Airport" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Airports</SelectItem>
          {toAirports.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

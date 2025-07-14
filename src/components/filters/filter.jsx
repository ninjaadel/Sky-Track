import { flights } from "../../data/flight";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const fromCountries = [
  ...new Set(flights.map((flight) => flight?.from?.country)),
];
const toCountries = [
  ...new Set(flights.map((flight) => flight?.to?.country)),
];

export function Filter({ fromCountry, setFromCountry, toCountry, setToCountry }) {
  return (
    <div className="bg-card xs:w-full sm:w-[240px] flex justify-between mb-2 mt-1 rounded-t-lg">
      <Select
        onValueChange={(value) =>
          setFromCountry(value === "all" ? null : value)
        }
        value={fromCountry}
      >
        <SelectTrigger>
          <SelectValue placeholder="from" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">all</SelectItem>
          {fromCountries.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select
        onValueChange={(value) =>
          setToCountry(value === "all" ? null : value)
        }
        value={toCountry}
      >
        <SelectTrigger>
          <SelectValue placeholder="to" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">all</SelectItem>
          {toCountries.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
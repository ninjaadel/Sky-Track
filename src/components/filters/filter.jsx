import { flights } from "../../data/flight";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FromCountries = [
  ...new Set(flights.map((flight) => flight?.from?.country)),
];
const ToCountries = [...new Set(flights.map((flight) => flight?.to?.country))];
export function Filter({ fromCountry, setFromCountry, toCountry, setToCountry }) {
  return (
    <div className="bg-card  w-full flex justify-between mb-2 mt-1 rounded-t-lg xl:flex xl:inline-block">
      <Select
        onValueChange={(value) =>
          setFromCountry(value === "all" ? null : value)
        }
        value={fromCountry}
      >
        <SelectTrigger>
          <SelectValue placeholder="choice country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">ALL</SelectItem>
          {FromCountries.map((choice) => (
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
          <SelectValue placeholder="choice country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">ALL</SelectItem>
          {FromCountries.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

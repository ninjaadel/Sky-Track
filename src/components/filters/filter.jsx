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

export function Filter({ fromCountry, setFromCountry }) {
  return (
    <div className="bg-card p-3 rounded-xl my-2 flex w-full ml-1">
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
    </div>
  );
}

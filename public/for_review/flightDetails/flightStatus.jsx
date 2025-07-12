import { ProgressBar } from "../../special/progressBar";

export function FlightStatus({ flight }) {
  return (
    <div>
      <div className="mx-3 my-3">
        <ProgressBar percentage={flight?.progress} />
      </div>
      <div className="flex justify-between gap-2">
        <div className="mx-3">
          <span>2 715km</span>
          <span className="">
            <span>3h 1m</span>
          </span>
        </div>
        <div>
          <span>882 km</span>
          <span className="mx-3">
            <span>59 min</span>
          </span>
        </div>
      </div>
    </div>
  );
}

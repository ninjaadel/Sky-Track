import { Plane } from "lucide-react";

export function ProgressBar({ percentage }) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full dark:bg-gray-700 my-2">
      <div
        className=" h-full rounded-full relative bg-gradient-to-r from-rose-800 to-orange-400 opacity-80 transition-all duration-600 "
        style={{ width: `${percentage}%` }}
      >
        <Plane
          fill="white"
          strokeWidth={0}
          className={`rotate-45 absolute -top-2  w-5 h-5 right-0.5 translate-x-1/2`}
        />
      </div>
    </div>
  );
}

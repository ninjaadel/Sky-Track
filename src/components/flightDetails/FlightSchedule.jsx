import React from "react";
export function FlightSchedule({ flight }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mb-1  mx-2  bg-neutral-900 px-2 ">
        <div
          className="bg-card p-mini-element flex
       flex-items-center justify-between"
        >
          <p className="text-muted-foreground">Sheduled</p>
          <p>08:15</p>
        </div>
        <div
          className="bg-card px-mini-element py-mini-element flex
       flex-items-center justify-between p-2 mb-0.5 rounded-bl-xl  rounded-br-xl"
        >
          <p className="text-muted-foreground">Actual</p>
          <p>08:24</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1 mx-2 py-2 rounded-br-xl rounded-bl-xl bg-neutral-900 px-2">
        <div
          className="bg-card px-mini-element py-mini-element flex
       items-center justify-between rounded-br-xl rounded-br-xl"
        >
          <p className="text-muted-foreground">Sheduled</p>
          <p>08:24</p>
        </div>
        <div
          className="bg-card px-mini-element py-mini-element flex
       items-center justify-between "
        >
          <p className="text-muted-foreground">Sheduled</p>
          <p>08:24</p>
        </div>
      </div>
    </div>
  );
}

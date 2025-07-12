export function FlightInfarmation({ flight }) {
  return (
    <div className="my-2  px-2  ">
      <div className="font-medium mb-1 bg-[#282828] text-[var(--muted-foreground)] rounded-tl-lg rounded-tr-lg ">
        <h1 className="mx-4">flight information</h1>
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1 p-1 bg-[var(--card)] text-[var(--card-foreground)]">
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between">
          <p>{flight?.airplane.name}</p>
        </div>
        <div className="bg-[var(--card)] text-[var(--card-foreground)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={flight?.airlineCountryFlag}
              alt={flight?.airline.country}
              width={24}
              height={18}
              className="inline-block mr-1"
            />
            <span>{flight?.airline.country}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 mb-1 rounded-bl-lg rounded-br-lg  px-2 bg-[var(--card)] text-[var(--card-foreground)]">
        <div className="bg-card  flex items-center justify-between rounded-bl-xl">
          <p className="text-muted-foreground">Speed</p>
          <p>870 km/h</p>
        </div>
        <div className="bg-card px-mini-element py-mini-element flex items-center justify-between rounded-br-xl">
          <p className="text-muted-foreground">Altitude</p>
          <p>11 300 m</p>
        </div>
      </div>
    </div>
  );
}

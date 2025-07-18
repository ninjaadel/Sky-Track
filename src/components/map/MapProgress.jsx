import { Polyline } from "react-leaflet"

export function FlightPathProgress({progressBarWidth}) {
     const pathOptions = {
        color: "#FF0000",
        zIndex: 1000,
        weight: 2,
        opacity: 1,        // Tam kırmızı!
        dashArray: null
    };
    return (
   <Polyline positions={progressBarWidth} pathOptions={pathOptions} />
    )
}
import { logo } from "../constans/images";

import { Plane } from "../constans/images";

import { Flags } from "../constans/images";
export const flights = [
  {
    logo: logo.turkish,
    id: "TK143",
    airline: {
      name: "Turkish Airlines",
      country: "Turkey",
    },
    airlineCountryFlag: Flags.turkey,
    aircraftReg: "TC-JFP",
    from: {
      city: "Sofia",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "SOF",
    },
    to: {
      city: "Beijing",
      country: "China",
      countryCode: "CN",
      timezone: "UTC +8",
      code: "PEK",
    },
    airplane: {
      image: Plane.turkish,
      name: "Airbus A330",
    },
    colorGradient: ["#ffdede", "#ffbaba"],
    route: {
      speed: 870,
      altitude: 10600,
    },
    schedule: {
      scheduledDeparture: "10:00:00",
      actualDeparture: "10:05:00",
      scheduledArrival: "22:30:00",
      estimatedArrival: "22:15:00",
      status: "en-route",
    },
    progress: 93,
  },
  {
    logo: logo.rynair,
    id: "RN1782",
    airline: {
      name: "Ryanair",
      country: "Ireland",
    },
    airlineCountryFlag: Flags.ireland,
    aircraftReg: "D-AISP",
    from: {
      city: "Dublin",
      country: "Ireland",
      countryCode: "IE",
      timezone: "UTC +1",
      code: "DUB",
    },
    to: {
      city: "Larnaca",
      country: "Cyprus",
      countryCode: "CY",
      timezone: "UTC +3",
      code: "LCA",
    },
    airplane: {
      image: Plane.rynair,
      name: "Boeing 737-800",
    },
    colorGradient: ["#A1C6E1", "#88B5E0"],
    route: {
      speed: 840,
      altitude: 11200,
    },
    schedule: {
      scheduledDeparture: "15:00:00",
      actualDeparture: "15:00:00",
      scheduledArrival: "20:20:00",
      estimatedArrival: "20:25:00",
      status: "departed",
    },
    progress: 10,
  },
  {
    logo: logo.lufthansa,
    id: "S7124",
    airline: {
      name: "Lufthansa",
      country: "Germany",
    },
    airlineCountryFlag: Flags.german,
    aircraftReg: "RA-73415",
    from: {
      city: "Nice",
      country: "France",
      countryCode: "FR",
      timezone: "UTC +2",
      code: "NCE",
    },
    to: {
      city: "Tbilisi",
      country: "Georgia",
      countryCode: "GE",
      timezone: "UTC +4",
      code: "TBS",
    },
    airplane: {
      image: Plane.lufthansa,
      name: "Airbus A320neo",
    },
    colorGradient: ["#d6ffe5", "#96f2c1"],
    route: {
      speed: 860,
      altitude: 10900,
    },
    schedule: {
      scheduledDeparture: "07:45:00",
      actualDeparture: null,
      scheduledArrival: "12:55:00",
      estimatedArrival: null,
      status: "scheduled",
    },
    progress: 45,
  },
  {
    logo: logo.s7,
    id: "LX318",
    airline: {
      name: "S7 Airlines",
      country: "Russia",
    },
    airlineCountryFlag: Flags.russia,
    aircraftReg: "HB-JHK",
    from: {
      city: "Porto",
      country: "Portugal",
      countryCode: "PT",
      timezone: "UTC +1",
      code: "OPO",
    },
    to: {
      city: "Baku",
      country: "Azerbaijan",
      countryCode: "AZ",
      timezone: "UTC +4",
      code: "GYD",
    },
    airplane: {
      image: Plane.s7,
      name: "Airbus A220-300",
    },
    colorGradient: ["#e6e6ff", "#a8b4ff"],
    route: {
      speed: 830,
      altitude: 10700,
    },
    schedule: {
      scheduledDeparture: "18:20:00",
      actualDeparture: "19:10:00",
      scheduledArrival: "23:50:00",
      estimatedArrival: "00:30:00",
      status: "delayed",
    },
    progress: 75,
  },
  {
    logo: logo.swiss,
    id: "LH401",
    airline: {
      name: "SWISS",
      country: "Switzerland",
    },
    airlineCountryFlag: Flags.switzerland,
    aircraftReg: "D-AIXD",
    from: {
      city: "Burgas",
      country: "Bulgaria",
      countryCode: "BG",
      timezone: "UTC +3",
      code: "BOJ",
    },
    to: {
      city: "Muscat",
      country: "Oman",
      countryCode: "OM",
      timezone: "UTC +4",
      code: "MCT",
    },
    airplane: {
      image: Plane.swiss,
      name: "Airbus A350-900",
    },
    colorGradient: ["#e5f2ff", "#9dd2f9"],
    route: {
      speed: 890,
      altitude: 11300,
    },
    schedule: {
      scheduledDeparture: "14:30:00",
      actualDeparture: "14:32:00",
      scheduledArrival: "20:40:00",
      estimatedArrival: "20:37:00",
      status: "landed",
    },
    progress: 33,
  },
];

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home/home.jsx";
import 'leaflet/dist/leaflet.css';
import "./index.css";
createRoot(document.getElementById("root")).render(<App />);

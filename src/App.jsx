import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about";
import Tracks from "./pages/Tracks";
import Layout from "./components/layout";
import "./App.css";
import "./index.css";
import { StrictMode } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;

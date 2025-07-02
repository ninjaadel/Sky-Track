import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about";
import Flights from "./pages/flights";
import Layout from "./components/layout";
import Login from "./pages/login";
import "./App.css";
import "./index.css";
import { StrictMode } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;

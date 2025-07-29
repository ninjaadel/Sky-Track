import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/home/home";
import About from "./pages/about";
import Signup from "./pages/signup";
import "./App.css";
import "./index.css";
import { StrictMode } from "react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import FavoriteList from "./components/header/favorite";
import Flights from "./pages/flights";
import Layout from "./components/layout";
import Login from "./pages/login";

// QueryClient oluştur
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/flights" element={<Flights />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/favorite" element={<FavoriteList />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;

import { useContext } from "react";
import ThemeContext from "./theme";
export function useTheme() {
  return useContext(ThemeContext);
}

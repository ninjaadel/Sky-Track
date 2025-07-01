import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors
         flex items-center justify-center sm:p-1"
      >
        {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
}

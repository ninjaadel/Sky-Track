import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../providers/useTheme";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toggleTheme();
        }}
        className="p-2 rounded-lg  transition-colors
         flex items-center justify-center sm:p-1"
      >
        {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
      </Button>
    </div>
  );
}

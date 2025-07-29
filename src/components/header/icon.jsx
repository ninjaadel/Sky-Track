import { useTheme } from "../../providers/useTheme";

export function Icon({ size = 24, color = "currentColor" }) {
  const { theme } = useTheme();

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src="/airplane_icon.svg"
        alt="SkyTrack Logo"
        width={size}
        height={size}
        className={`object-contain max-w-full max-h-full transition-all duration-300 ${
          theme === "dark" ? "filter invert brightness-0 contrast-100" : ""
        }`}
      />
    </div>
  );
}

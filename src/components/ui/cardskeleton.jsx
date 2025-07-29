export function CardSkeleton() {
  return (
    <div className="bg-[color:var(--card)] text-[color:var(--card-foreground)] rounded-[var(--radius)] p-2 xs:p-3 sm:p-[var(--spacing-element)] block w-full h-full animate-pulse space-y-2 xs:space-y-[var(--spacing-element)] transition-colors duration-300 relative">
      {/* Logo + ID + Reg */}
      <div className="flex justify-between items-center mb-1 xs:mb-[var(--spacing-mini-element)]">
        <div className="flex items-center gap-2 xs:gap-3">
          <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-[color:var(--background)]" />
          <div className="h-4 xs:h-5 w-12 xs:w-16 bg-[color:var(--secondary)] rounded" />
        </div>
        <div className="h-4 xs:h-5 px-2 xs:px-3 py-0.5 xs:py-1 bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] rounded-xl text-xs xs:text-sm w-12 xs:w-16" />
      </div>

      {/* Flight Info Grid */}
      <div className="grid grid-cols-[1fr_3fr_1fr] xs:grid-cols-[1fr_5fr_1fr] items-end gap-1 xs:gap-2 w-full">
        {/* From */}
        <div className="space-y-0.5">
          <div className="h-3 xs:h-4 bg-[color:var(--muted-foreground)] rounded w-12 xs:w-16" />
          <div className="h-6 xs:h-8 bg-[color:var(--secondary)] rounded w-16 xs:w-20" />
        </div>

        {/* Progress Bar Simülasyonu */}
        <div className="-translate-y-1 flex items-center">
          <div className="w-full h-1.5 xs:h-2 bg-[color:var(--secondary)] rounded" />
        </div>

        {/* To */}
        <div className="space-y-0.5 text-right">
          <div className="h-3 xs:h-4 bg-[color:var(--muted-foreground)] rounded w-12 xs:w-16 ml-auto" />
          <div className="h-6 xs:h-8 bg-[color:var(--secondary)] rounded w-16 xs:w-20 ml-auto" />
        </div>
      </div>
    </div>
  );
}

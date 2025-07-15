export function CardSkeleton() {
  return (
    <div className="bg-[color:var(--card)] text-[color:var(--card-foreground)] rounded-[var(--radius)] p-[var(--spacing-element)] block w-full h-full animate-pulse space-y-[var(--spacing-element)] transition-colors duration-300 relative">
      {/* Logo + ID + Reg */}
      <div className="flex justify-between items-center mb-[var(--spacing-mini-element)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[color:var(--background)]" />
          <div className="h-5 w-16 bg-[color:var(--secondary)] rounded" />
        </div>
        <div className="h-5 px-3 py-1 bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] rounded-xl text-sm w-16" />
      </div>

      {/* Flight Info Grid */}
      <div className="grid grid-cols-[1fr_5fr_1fr] items-end gap-2 w-full">
        {/* From */}
        <div className="space-y-0.5">
          <div className="h-4 bg-[color:var(--muted-foreground)] rounded w-16" />
          <div className="h-8 bg-[color:var(--secondary)] rounded w-20" />
        </div>

        {/* Progress Bar Simülasyonu */}
        <div className="-translate-y-1 flex items-center">
          <div className="w-full h-2 bg-[color:var(--secondary)] rounded" />
        </div>

        {/* To */}
        <div className="space-y-0.5 text-right">
          <div className="h-4 bg-[color:var(--muted-foreground)] rounded w-16 ml-auto" />
          <div className="h-8 bg-[color:var(--secondary)] rounded w-20 ml-auto" />
        </div>
      </div>
    </div>
  );
}

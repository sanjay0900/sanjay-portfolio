import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const DEFAULT_LABEL = "Available for Community Leadership Roles";

interface AvailabilityBadgeProps {
  label?: string;
  className?: string;
}

export function AvailabilityBadge({
  label = DEFAULT_LABEL,
  className,
}: AvailabilityBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-7 gap-2.5 border-emerald-500/25 bg-emerald-500/[0.08] px-3.5 text-[0.8125rem] font-medium tracking-wide text-emerald-400 shadow-[0_0_24px_-6px_rgba(52,211,153,0.35)] backdrop-blur-sm transition-colors hover:border-emerald-500/35 hover:bg-emerald-500/[0.12]",
        className
      )}
    >
      <span className="relative flex size-2 shrink-0">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50 [animation-duration:2.5s]" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.55)]" />
      </span>
      {label}
    </Badge>
  );
}

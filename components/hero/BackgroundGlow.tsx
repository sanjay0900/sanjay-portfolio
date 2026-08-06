import { cn } from "@/lib/utils";

interface BackgroundGlowProps {
  className?: string;
}

export function BackgroundGlow({ className }: BackgroundGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-1/4 left-1/2 size-[42rem] -translate-x-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(120,119,198,0.22)_0%,transparent_70%)] blur-3xl [animation-duration:7s]" />
      <div className="absolute -bottom-1/4 -right-1/4 size-[36rem] animate-pulse rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] blur-3xl [animation-delay:1.5s] [animation-duration:9s]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27200%27%20height=%27200%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] bg-size-[200px_200px] opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}

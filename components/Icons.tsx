export function Chevron({ className = "", dir = "right" }: { className?: string; dir?: "right" | "left" | "down" }) {
  const rot = dir === "left" ? "rotate-180" : dir === "down" ? "rotate-90" : "";
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={`${rot} ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3l5 5-5 5" />
    </svg>
  );
}
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12L12 4M6 4h6v6" />
    </svg>
  );
}
export function Plus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}
export function External({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3H3.5A.5.5 0 0 0 3 3.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9M9 3h4v4M13 3L7 9" />
    </svg>
  );
}
export function Info({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 7v4M8 5v.2" strokeLinecap="round" />
    </svg>
  );
}
export function Question({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="currentColor">
      <circle cx="8" cy="8" r="7" />
      <path d="M6.2 6.4a1.9 1.9 0 1 1 2.7 1.7c-.5.3-.9.6-.9 1.2v.2M8 11.4v.2" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
export function QuestionOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M6.3 6.5a1.8 1.8 0 1 1 2.5 1.6c-.5.3-.8.6-.8 1.1v.2M8 11.3v.2" strokeLinecap="round" />
    </svg>
  );
}
export function Bookmark({ filled, className = "" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 12 14" width="10" height="12" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M1.5 1h9v12l-4.5-3-4.5 3z" />
    </svg>
  );
}
export function Lock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="currentColor">
      <path d="M4 7V5.5a4 4 0 0 1 8 0V7h.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1.6 0h4.8V5.5a2.4 2.4 0 0 0-4.8 0z" />
    </svg>
  );
}
export function Calendar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="3" width="12" height="11" rx="1.5" />
      <path d="M2 6.5h12M5 1.5v3M11 1.5v3" strokeLinecap="round" />
      <path d="M5 9h1M8 9h1M11 9h1M5 11.5h1M8 11.5h1" strokeLinecap="round" />
    </svg>
  );
}
export function Bag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M3 5.5h10l-.7 8H3.7z" />
      <path d="M5.5 5.5V5a2.5 2.5 0 0 1 5 0v.5" strokeLinecap="round" />
    </svg>
  );
}
export function Sort({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 14" width="8" height="12" className={className} fill="currentColor">
      <path d="M5 1l3.5 4h-7z" />
      <path d="M5 13L1.5 9h7z" />
    </svg>
  );
}
export function LongArrow({ dir = "right" }: { dir?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 16" width="26" height="18" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={dir === "left" ? "rotate-180" : ""}>
      <path d="M2 8h20M16 2l6 6-6 6" />
    </svg>
  );
}

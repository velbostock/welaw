import { ReactNode } from "react";

/** 60px title row (+ optional 48px tab row with 1px bottom border = 108px). */
export default function PageHeader({ title, right, tabs }: { title: ReactNode; right?: ReactNode; tabs?: ReactNode }) {
  return (
    <header className={`bg-white ${tabs ? "border-b border-line" : ""}`}>
      <div className="h-[60px] px-4 sm:px-10 flex items-center justify-between gap-3">
        <h1 className="text-[18px] sm:text-[20px] font-bold text-ink tracking-tight leading-none truncate">{title}</h1>
        {right && <div className="flex items-center shrink-0">{right}</div>}
      </div>
      {tabs}
    </header>
  );
}

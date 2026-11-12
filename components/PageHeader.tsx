import { ReactNode } from "react";

/** 60px title row (+ optional 48px tab row with 1px bottom border = 108px). */
export default function PageHeader({ title, right, tabs }: { title: ReactNode; right?: ReactNode; tabs?: ReactNode }) {
  return (
    <header className={`bg-white ${tabs ? "border-b border-line" : ""}`}>
      <div className="h-[60px] px-10 flex items-center justify-between">
        <h1 className="text-[20px] font-bold text-ink tracking-tight leading-none">{title}</h1>
        {right && <div className="flex items-center">{right}</div>}
      </div>
      {tabs}
    </header>
  );
}

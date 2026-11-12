"use client";
import { useState } from "react";

export default function Toggle({ defaultOn = false, size = "md" }: { defaultOn?: boolean; size?: "sm" | "md" }) {
  const [on, setOn] = useState(defaultOn);
  const dims = size === "sm" ? { w: "w-[32px] h-[18px]", k: "w-[14px] h-[14px]", s: "translate-x-[14px]" } : { w: "w-[34px] h-[20px]", k: "w-4 h-4", s: "translate-x-[14px]" };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`relative inline-block align-middle rounded-full transition-colors ${dims.w} ${on ? "bg-toggle" : "bg-[#e3e7e9]"}`}
    >
      <span className={`absolute left-[2px] top-[2px] rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-transform ${dims.k} ${on ? dims.s : ""}`} />
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function ManagerShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close the drawer on navigation
  useEffect(() => setOpen(false), [pathname]);
  // lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {open && <button aria-label="메뉴 닫기" onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-black/50 lg:hidden" />}
      <main className="flex-1 min-w-0 ml-0 lg:ml-[200px] flex flex-col min-h-screen">
        {/* mobile top bar */}
        <div className="lg:hidden sticky top-0 z-20 h-14 bg-side text-white flex items-center px-4">
          <button aria-label="메뉴 열기" onClick={() => setOpen(true)} className="w-10 h-10 -ml-2 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <Link href="/manager/dashboard" className="ml-1 leading-none select-none">
            <span className="text-brand font-extrabold text-[20px] tracking-[-0.05em]">welaw</span>
            <span className="ml-1 text-white font-bold text-[14px] tracking-[-0.04em]">manager</span>
          </Link>
        </div>
        {children}
      </main>
    </div>
  );
}

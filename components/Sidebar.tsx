"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { External } from "./Icons";

type Item = { label: string; href: string; badge?: "N" | "dot"; children?: { label: string; href: string }[] };

const NAV: Item[] = [
  { label: "홈", href: "/manager/dashboard" },
  { label: "유료 상담", href: "/manager/advices/index/counsels" },
  {
    label: "내용증명",
    href: "/manager/certified-letter/settings",
    children: [
      { label: "의뢰 목록", href: "/manager/certified-letter/requests" },
      { label: "의뢰 이력", href: "/manager/certified-letter/history" },
      { label: "설정", href: "/manager/certified-letter/settings" },
    ],
  },
  { label: "간편 문의", href: "/manager/quick-inquiries", badge: "N" },
  { label: "온라인 상담", href: "/manager/online-counsels" },
  { label: "로톡AD", href: "/manager/ad-products", badge: "dot" },
  { label: "포스트", href: "/manager/posts" },
  { label: "동영상", href: "/manager/videos" },
  { label: "공지사항", href: "/manager/notices", badge: "N" },
];

const GUIDES = ["로톡 이용 가이드", "퍼스널 채널 가이드", "나만의 배너 제작"];
const LINKS = [
  { label: "로톡 홈페이지" },
  { label: "로이어스원", external: true },
  { label: "결제 내역" },
  { label: "설정" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (item: Item) => pathname === item.href || (item.children?.some((c) => pathname === c.href) ?? false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-[200px] bg-side text-side-text overflow-y-auto no-scrollbar z-20 px-4">
      {/* logo: 40 → 81 */}
      <Link href="/manager/dashboard" className="block pt-[40px] h-[102px] select-none">
        <span className="block text-brand font-extrabold text-[25px] leading-[24px] tracking-[-0.05em]">welaw</span>
        <span className="block text-white font-bold text-[18px] leading-[18px] tracking-[-0.04em]">manager</span>
      </Link>
      <div className="h-px bg-side-active" />

      {/* profile 114 → 190, button 204 → 228, divider 248 */}
      <div className="pt-[11px]">
        <div className="relative h-[76px] rounded-[3px] bg-[#111214] overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand" />
          <div className="ml-3 w-[52px] h-[52px] rounded-[3px] bg-[#2b2f33]" />
          <div className="ml-3 text-white">
            <p className="text-[13px] font-bold leading-4">김변호 변호사</p>
            <p className="text-[11px] text-side-text leading-4 mt-1">법무법인 위로</p>
          </div>
        </div>
        <button className="mt-[14px] w-full h-6 rounded-[3px] bg-side-btn text-white text-[11px] font-semibold tracking-tight leading-6">
          내 프로필 관리
        </button>
      </div>
      <div className="mt-5 h-px bg-side-active" />

      {/* nav: first item top 261 */}
      <nav className="pt-[12px]">
        <ul>
          {NAV.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href} className="mb-1 last:mb-0">
                <Link
                  href={item.href}
                  className={`flex items-center h-8 px-2 rounded-[3px] text-[14px] leading-8 ${
                    active ? "bg-side-active text-white font-bold" : "text-side-text font-medium hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge === "N" && <span className="ml-[6px] text-brand text-[10px] font-bold relative -top-[1px]">N</span>}
                  {item.badge === "dot" && <span className="ml-[2px] w-[5px] h-[5px] rounded-full bg-brand relative top-[4px]" />}
                </Link>
                {active && item.children && (
                  <ul className="pb-0">
                    {item.children.map((c) => {
                      const cActive = pathname === c.href;
                      return (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={`block pl-[26px] h-[35px] leading-[35px] text-[13px] ${
                              cActive ? "text-white font-medium underline underline-offset-[5px]" : "text-side-text"
                            }`}
                          >
                            {c.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-6 h-px bg-side-active" />

      {/* guides: text top +28, pitch 26 */}
      <ul className="pt-[21px] pb-[21px]">
        {GUIDES.map((g) => (
          <li key={g}>
            <a href="#" className="block px-2 h-[26px] leading-[26px] text-[12px] font-bold text-side-link">
              {g}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-px bg-side-active" />

      {/* links: +31, pitch 24 */}
      <ul className="pt-[25px] pb-[25px]">
        {LINKS.map((l) => (
          <li key={l.label}>
            <a href="#" className="flex items-center px-2 h-6 leading-6 text-[12px] text-side-link">
              {l.label}
              {l.external && <External className="ml-[6px] text-[13px]" />}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-px bg-side-active" />

      <div className="pt-[14px] pb-10">
        <button className="px-2 h-5 leading-5 text-[12px] text-side-muted">로그아웃</button>
      </div>
    </aside>
  );
}

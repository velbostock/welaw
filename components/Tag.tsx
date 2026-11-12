export default function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-block bg-tag text-white text-[12px] leading-[28px] px-2 rounded-[3px] whitespace-nowrap">{children}</span>;
}

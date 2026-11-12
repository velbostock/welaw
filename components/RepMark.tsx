import { Bookmark } from "./Icons";

export default function RepMark({ on }: { on: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[13px] leading-none ${on ? "text-brand font-semibold" : "text-faint"}`}>
      <Bookmark filled={on} />
      대표
    </span>
  );
}

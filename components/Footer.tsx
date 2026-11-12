export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`text-center text-[13px] leading-4 font-bold text-faint tracking-tight ${className}`}>
      (C) WeLaw Co., Ltd. ALL RIGHT RESERVED.
    </footer>
  );
}

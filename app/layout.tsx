import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "welaw manager",
  description: "변호사 매니저 콘솔",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

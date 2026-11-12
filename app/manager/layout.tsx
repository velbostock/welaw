import Sidebar from "@/components/Sidebar";

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 min-w-0 ml-[200px] flex flex-col min-h-screen">{children}</main>
    </div>
  );
}

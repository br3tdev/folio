import * as React from "react";
import Navbar from "./_components/navbar";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <main className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </main>
  );
}

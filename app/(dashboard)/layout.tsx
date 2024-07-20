import * as React from "react";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

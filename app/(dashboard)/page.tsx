"use client";

import { UserButton } from "@clerk/nextjs";

export interface IDashboardPageProps {}

export default function DashboardPage(props: IDashboardPageProps) {
  return (
    <div>
      This is a protected page!
      <UserButton />
    </div>
  );
}

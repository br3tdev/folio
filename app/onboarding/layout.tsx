import * as React from "react";

export interface IOnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout({ children }: IOnboardingLayoutProps) {
  return <div className="h-full">{children}</div>;
}

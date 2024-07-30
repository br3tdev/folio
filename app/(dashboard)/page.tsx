"use client";

import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

export interface IDashboardPageProps {}

export default function DashboardPage(props: IDashboardPageProps) {
  const { organization } = useOrganization();

  return (
    <div className="h-full p-4">
      {!organization ? (
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-1">
            <h3 className="font-bold text-2xl text-foreground">
              You have not mediakits
            </h3>
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-sm text-muted-foreground">
                You can start sharing your media kit as soon as you add a
                profile.
              </p>
              <Link href={"/onboarding"}>
                <Button>Add Mediakit</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h3>Your media kits go here</h3>
      )}
    </div>
  );
}

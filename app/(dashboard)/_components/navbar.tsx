"use client";

import ModeToggle from "@/components/mode-toggle";
import BrandLogo from "@/components/ui/brand-logo";
import { UserButton } from "@clerk/nextjs";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="flex items-center justify-center p-4 border-b">
      <div className="w-full flex justify-between max-w-screen-2xl">
        <div className="shrink-0">
          <BrandLogo mini={false} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-9",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

/*
<div className="flex gap-5 justify-between p-4 text-4xl font-semibold whitespace-nowrap border-b border-zinc-200 text-zinc-900 max-md:flex-wrap">
      <div className="flex gap-1 justify-center px-3 py-0.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d27f358b256ce58a60f7c1e530dc4eae7f0a07b50fec5b8a123ce0445b8ef01?"
          className="shrink-0 w-9 aspect-square"
        />
        <div className="my-auto">Fluencer</div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="shrink-0 my-auto w-9 aspect-square"
      />
    </div>
*/

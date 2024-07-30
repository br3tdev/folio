import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Icons } from "./icons";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export interface IBrandLogoProps {
  className?: string;
  mini?: boolean;
}

export default function BrandLogo({ className, mini }: IBrandLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1 cursor-pointer",
        className
      )}
    >
      <Icons.logo />
      <p
        className={cn(
          "text-foreground text-[32px] font-semibold",
          poppins.className,
          mini && "hidden"
        )}
      >
        Fluencer
      </p>
    </div>
  );
}

// /* Fluencer */

// width: 140px;
// height: 28px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 32px;
// line-height: 28px;
// /* identical to box height, or 88% */

// color: #020617;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

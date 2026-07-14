import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  sm: {
    width: 150,
    height: 40,
  },
  lg: {
    width: 250,
    height: 75,
  },
} as const;

export interface LogoProps {
  className?: string;
  size?: keyof typeof SIZE_CLASSES;
}

export function Logo({ className, size = "lg" }: LogoProps) {
  const { width, height } = SIZE_CLASSES[size];

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/images/logo-light.png"
        alt="Naeem's Portfolio Logo"
        width={width}
        height={height}
        className="block dark:hidden"
        priority
      />
      <Image
        src="/images/logo-dark.png"
        alt="Naeem's Portfolio Logo"
        width={width}
        height={height}
        className="hidden dark:block"
        priority
      />
    </Link>
  );
}

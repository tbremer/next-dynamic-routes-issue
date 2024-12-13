"use client";

import type { PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { Backward, Forward } from "../icons";

export function ClientLink({
  href,
  children,
  forward = true,
}: PropsWithChildren<LinkProps & { forward: boolean | undefined }>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      className={`
        px-4 py-2 rounded-md transition-colors duration-200
        ${
          isActive
            ? "text-purple-600 hover:text-purple-800"
            : "text-blue-600 hover:text-blue-800"
        }
         hover:underline
      `}
      href={href}
    >
      {!forward && <Backward />}
      {children}
      {forward && <Forward />}
    </NextLink>
  );
}

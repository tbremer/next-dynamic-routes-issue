import { Suspense, type PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";
import { ClientLink } from "./client";
import { Backward, Forward } from "../icons";

export function Link({
  href,
  children,
  forward = true,
}: PropsWithChildren<LinkProps & { forward?: boolean }>) {
  return (
    <Suspense
      fallback={
        <NextLink
          className={`
        px-4 py-2 rounded-md transition-colors duration-200 
        text-blue-600 hover:text-blue-800
        hover:underline
      `}
          href={href}
        >
          {!forward && <Backward />}
          {children}
          {forward && <Forward />}
        </NextLink>
      }
    >
      <ClientLink href={href} forward={forward}>
        {children}
      </ClientLink>
    </Suspense>
  );
}

import NextLink, { type LinkProps } from "next/link";
import type { JSX, PropsWithChildren } from "react";
import { ServerLayoutComponent } from "../components/test-bed/server";
import { Link } from "../components/link";

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <h1>Dynamic Route w/o async function call</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" forward={false}>
              back to home page
            </Link>
          </li>
          <li>
            <Link href="/dynamic-route-no-async-layout">route: `/`</Link> (
            <em>should be `mode` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route-no-async-layout/email">
              route: `/email`
            </Link>
            (<em>should be `mode` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route-no-async-layout/clientA">
              route: `/clientA`
            </Link>
            (<em>should be `clientId` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route-no-async-layout/clientB">
              route: `/clientB`
            </Link>
            (<em>should be `clientId` page</em>)
          </li>
        </ul>
      </nav>

      <ServerLayoutComponent
        thenables={[
          Promise.resolve("hello, world"),
          Promise.resolve("function called"),
        ]}
      >
        {children}
      </ServerLayoutComponent>
    </>
  );
}

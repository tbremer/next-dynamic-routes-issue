import type { JSX, PropsWithChildren } from "react";
import { ServerLayoutComponent } from "../components/test-bed/server";
import { thenable } from "../components/test-bed/thenable";
import { Link } from "../components/link";

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <h1>Dynamic Route w/ async function call</h1>
      <nav>
        <ul>
          <li>
            <Link href="/" forward={false}>
              back to home page
            </Link>
          </li>
          <li>
            <Link href="/dynamic-route">route: `/`</Link> (
            <em>should be `mode` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route/email">route: `/email`</Link> (
            <em>should be `mode` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route/clientA">route: `/clientA`</Link> (
            <em>should be `clientId` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route/clientB">route: `/clientB`</Link> (
            <em>should be `clientId` page</em>)
          </li>
          <li>
            <Link href="/dynamic-route/ohno">route: `/ohno`</Link> (
            <em>
              should be `clientId` page —{" "}
              <strong>this should cause an application error</strong>
            </em>
            )
          </li>
        </ul>
      </nav>
      <ServerLayoutComponent
        thenables={[
          Promise.resolve("hello, world"),
          () => Promise.resolve("function called"),
          thenable("this uses headers"),
        ]}
      >
        {children}
      </ServerLayoutComponent>
    </>
  );
}

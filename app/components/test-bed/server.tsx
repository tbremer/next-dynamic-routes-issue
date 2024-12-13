import type { JSX, PropsWithChildren } from "react";
import { ClientLayoutComponent } from "./client";

type Thenable<T> = Promise<T>;

interface ServerLayoutComponentProps {
  thenables: (Thenable<unknown> | (() => Thenable<unknown>))[];
}

export function ServerLayoutComponent({
  thenables,
  children,
}: PropsWithChildren<ServerLayoutComponentProps>): JSX.Element {
  const obj = Object.fromEntries(
    thenables.map((t) => [
      [(Math.random() * 100).toString(), typeof t === "function" ? t() : t],
    ]),
  );

  return (
    <div className="pl-4">
      <h2>ServerLayoutComponent.tsx</h2>
      <ClientLayoutComponent thens={obj}>{children}</ClientLayoutComponent>
    </div>
  );
}

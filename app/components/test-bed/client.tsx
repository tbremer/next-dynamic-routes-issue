"use client";

import {
  createContext,
  useContext,
  useMemo,
  type JSX,
  type PropsWithChildren,
} from "react";

const Context = createContext({
  thens: {},
});

export function ClientLayoutComponent({
  children,
  thens,
}: PropsWithChildren<{
  thens: Record<string, Promise<unknown>>;
}>): JSX.Element {
  const parentContext = useContext(Context);
  const contextValue = useMemo(
    () => ({ thens: { ...parentContext.thens, ...thens } }),
    [parentContext.thens, thens],
  );
  return (
    <div className="pl-4">
      <Context.Provider value={contextValue}>
        <h3>ClientLayoutComponent.tsx</h3>
        <div className="pl-4">{children}</div>
      </Context.Provider>
    </div>
  );
}

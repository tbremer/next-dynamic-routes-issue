import { headers } from "next/headers";

export async function thenable(str: string): Promise<[string, string[]]> {
  const h = await headers();
  const allHeaders = Array.from(h.entries()).map(
    ([name, value]) => `${name}: ${value}`,
  );

  return [str, allHeaders];
}

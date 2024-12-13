import type { JSX } from "react";

export default async function ModePage({
  params,
}: {
  params: Promise<{ mode: string | string[] | [] }>;
}): Promise<JSX.Element> {
  const { mode } = await params;
  return (
    <>
      <h4>[[...mode]]/page.tsx</h4>
      <code>
        <pre>{JSON.stringify({ mode }, null, 2)}</pre>
      </code>
    </>
  );
}

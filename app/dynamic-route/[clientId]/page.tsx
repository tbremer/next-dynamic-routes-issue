import type { JSX } from "react";

export const dynamicParams = false;

export function generateStaticParams(): { clientId: string }[] {
  return [
    { clientId: "clientA" },
    { clientId: "clientB" },
    { clientId: "clientC" },
  ];
}

export default async function ClientIDPage({
  params,
}: { params: Promise<{ clientId: string }> }): Promise<JSX.Element> {
  const { clientId } = await params;

  return (
    <>
      <h4>[clientId]/page.tsx</h4>
      <code>
        <pre>{JSON.stringify({ clientId }, null, 2)}</pre>
      </code>
    </>
  );
}

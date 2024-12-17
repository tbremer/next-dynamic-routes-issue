import type { JSX, ReactNode } from "react";

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
  const { Logo, Title } = LOGOS.get(clientId);

  return (
    <>
      <h4>[clientId]/page.tsx</h4>
      <code>
        <pre>{JSON.stringify({ clientId }, null, 2)}</pre>
      </code>
      <hr />
      <h5>Client Info:</h5>
      <h6>
        Title: <Title />
      </h6>
      <h6>
        Logo: <Logo />
      </h6>
    </>
  );
}

const LOGOS = new Map(
  Object.entries({
    clientA: {
      title: "Client A",
      Logo: (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Client A Logo</title>
          <circle cx="50" cy="50" r="45" fill="#FF6B6B" />
          <text
            x="50"
            y="65"
            fontFamily="Arial, sans-serif"
            fontSize="40"
            fill="white"
            textAnchor="middle"
          >
            A
          </text>
        </svg>
      ),
    },
    clientB: {
      title: "Client B",
      Logo: (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Client B Logo</title>
          <rect x="5" y="5" width="90" height="90" fill="#4ECDC4" />
          <text
            x="50"
            y="65"
            fontFamily="Arial, sans-serif"
            fontSize="40"
            fill="white"
            textAnchor="middle"
          >
            B
          </text>
        </svg>
      ),
    },
    clientC: {
      title: "Client C",
      Logo: (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Client C Logo</title>
          <polygon points="50,5 95,95 5,95" fill="#45B7D1" />
          <text
            x="50"
            y="75"
            fontFamily="Arial, sans-serif"
            fontSize="40"
            fill="white"
            textAnchor="middle"
          >
            C
          </text>
        </svg>
      ),
    },
  }),
);

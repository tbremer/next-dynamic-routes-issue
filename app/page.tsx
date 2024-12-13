import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/dynamic-route">
        this is where you wanna go <Unicode v="279E" />
      </Link>
    </>
  );
}

function Unicode({ v }: { v: `U+${string}` | string }) {
  return String.fromCodePoint(Number.parseInt(v.replace("U+", ""), 16));
}

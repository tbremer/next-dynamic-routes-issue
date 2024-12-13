import { Link } from "./components/link";

export default function Home() {
  return (
    <>
      <Link href="/dynamic-route">dynamic route w/ async function calls</Link>
      <br />
      <Link href="/dynamic-route-no-async-layout">
        dynamic route w/o async function calls
      </Link>
    </>
  );
}

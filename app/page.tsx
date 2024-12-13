import { Link } from "./components/link";

export default function Home() {
  return (
    <>
      <Link href="/dynamic-route">dynamic route w/ promise function calls</Link>
      <br />
      <Link href="/dynamic-route-no-async-layout">
        dynamic route w/o promise function calls
      </Link>
    </>
  );
}

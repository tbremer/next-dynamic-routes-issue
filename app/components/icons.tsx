export const Forward = () => (
  <span className="inline-flex ml-1">
    <Unicode v="279E" />
  </span>
);
export const Backward = () => (
  <span className="scale-x-[-1] inline-flex mr-1">
    <Unicode v="279E" />
  </span>
);

function Unicode({ v }: { v: `U+${string}` | string }) {
  return String.fromCodePoint(Number.parseInt(v.replace("U+", ""), 16));
}

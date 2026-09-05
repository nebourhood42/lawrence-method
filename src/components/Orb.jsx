/**
 * Decorative blurred blob used sparingly behind section content to add
 * ambient warmth and depth. Purely visual — aria-hidden, ignored by
 * prefers-reduced-motion (handled in index.css).
 */
export default function Orb({
  color = "var(--color-rust-tint)",
  size = 420,
  top,
  left,
  right,
  bottom,
  opacity = 0.55,
  drift = "a",
}) {
  return (
    <div
      aria-hidden="true"
      className={`orb animate-drift-${drift}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: color,
        opacity,
      }}
    />
  );
}

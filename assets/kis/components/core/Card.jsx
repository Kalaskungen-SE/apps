export function Card({ glass, strong, children, style }) {
  const cls = glass ? `kis-glass${strong ? " kis-glass--strong" : ""}` : "kis-card";
  return <div className={cls} style={style}>{children}</div>;
}


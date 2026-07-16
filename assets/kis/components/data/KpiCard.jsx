export function KpiCard({ label, value, delta, deltaDirection = "flat", hint, tone = "neutral", style }) {
  const deltaCls = `kis-kpi__delta kis-kpi__delta--${deltaDirection}`;
  const arrow = deltaDirection === "up" ? "▲" : deltaDirection === "down" ? "▼" : "—";
  return (
    <div className={`kis-kpi kis-kpi--${tone}`} style={style}>
      <div className="kis-kpi__label">{label}</div>
      <div className="kis-kpi__value">{value}</div>
      {delta ? (
        <div className={deltaCls}>
          <span aria-hidden="true" style={{ fontSize: "10px" }}>{arrow}</span>
          {delta}
        </div>
      ) : null}
      {hint ? <div className="kis-kpi__hint">{hint}</div> : null}
    </div>
  );
}


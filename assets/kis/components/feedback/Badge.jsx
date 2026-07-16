export function Badge({ tone = "neutral", children }) {
  const cls = tone === "neutral" ? "kis-badge" : `kis-badge kis-badge--${tone}`;
  return <span className={cls}>{children}</span>;
}

export function Tag({ children, onRemove }) {
  return (
    <span className="kis-tag">
      {children}
      {onRemove ? (
        <button onClick={onRemove} style={{ border: "none", background: "none", cursor: "pointer", color: "inherit", padding: 0, fontSize: "12px", lineHeight: 1 }} aria-label="Ta bort">
          ×
        </button>
      ) : null}
    </span>
  );
}

export function Status({ state = "info", children }) {
  return <span className={`kis-status kis-status--${state}`}>{children}</span>;
}


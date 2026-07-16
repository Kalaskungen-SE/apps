export function Button({ variant = "primary", size, disabled, children, onClick, type = "button" }) {
  const cls = ["kis-btn", `kis-btn--${variant}`, size ? `kis-btn--${size}` : ""].filter(Boolean).join(" ");
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}


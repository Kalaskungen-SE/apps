export function Input({ label, id, type = "text", placeholder, value, onChange, style }) {
  return (
    <div className="kis-field" style={style}>
      {label ? <label className="kis-label" htmlFor={id}>{label}</label> : null}
      <input className="kis-input" id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}


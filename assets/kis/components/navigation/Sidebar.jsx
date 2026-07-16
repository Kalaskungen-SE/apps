export function Sidebar({ brand = "KIS", sections = [], activeId, onSelect, footer, style }) {
  return (
    <nav className="kis-sidebar" style={style}>
      <div className="kis-sidebar__brand">
        {brand}
        <em>.</em>
      </div>
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          {section.title ? <div className="kis-sidebar__section">{section.title}</div> : null}
          {section.items.map((item) => (
            <button
              key={item.id}
              className={"kis-sidebar__item" + (item.id === activeId ? " kis-sidebar__item--active" : "")}
              onClick={() => onSelect && onSelect(item.id)}
            >
              {item.label}
              {item.badge ? <span className="kis-badge" style={{ marginLeft: "auto" }}>{item.badge}</span> : null}
            </button>
          ))}
        </React.Fragment>
      ))}
      {footer ? <div style={{ marginTop: "auto" }}>{footer}</div> : null}
    </nav>
  );
}


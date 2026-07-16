export function Tabs({ tabs = [], activeId, onSelect, line, style }) {
  return (
    <div className={"kis-tabs" + (line ? " kis-tabs--line" : "")} style={style}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={"kis-tab" + (tab.id === activeId ? " kis-tab--active" : "")}
          onClick={() => onSelect && onSelect(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}


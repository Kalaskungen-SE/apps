Glasad vänsternav (240px) med wordmark, grupprubriker och aktivt val i primärblått.

```jsx
<Sidebar
  activeId="dash"
  onSelect={setView}
  sections={[{ title: "Analys", items: [{ id: "dash", label: "Dashboard" }, { id: "rapport", label: "Rapporter", badge: "3" }] }]}
/>
```


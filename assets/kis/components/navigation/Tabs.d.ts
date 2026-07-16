export interface TabsProps {
  tabs?: { id: string; label: string }[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** true = understrukna tabs (för rapportsektioner) i stället för segmenterad kontroll */
  line?: boolean;
  style?: React.CSSProperties;
}


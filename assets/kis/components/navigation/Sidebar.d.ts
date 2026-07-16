export interface SidebarProps {
  /** Wordmark-text; punkt i blått läggs till automatiskt */
  brand?: string;
  /** Grupper av navigationsval */
  sections?: { title?: string; items: { id: string; label: string; badge?: string }[] }[];
  /** id för aktivt val */
  activeId?: string;
  onSelect?: (id: string) => void;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}


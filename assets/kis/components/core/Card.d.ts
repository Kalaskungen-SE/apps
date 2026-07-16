export interface CardProps {
  /** true = liquid glass-panel (blur + transparens) i stället för vitt kort */
  glass?: boolean;
  /** Tätare glas (kräver glass) */
  strong?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}


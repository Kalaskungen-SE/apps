export interface InputProps {
  /** Etikett i versaler ovanför fältet */
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}


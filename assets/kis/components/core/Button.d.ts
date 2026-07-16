/**
 * @startingPoint section="Core" subtitle="Knapp i fyra varianter och tre storlekar" viewport="700x200"
 */
export interface ButtonProps {
  /** Visuell variant */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Storlek; utelämna för standard (38px) */
  size?: "sm" | "lg";
  disabled?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  children?: React.ReactNode;
}


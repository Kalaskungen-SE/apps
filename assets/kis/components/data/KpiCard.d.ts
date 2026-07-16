/**
 * @startingPoint section="Data" subtitle="KPI-kort med subtil toning, delta och hint" viewport="700x200"
 */
export interface KpiCardProps {
  /** Etikett i versaler, t.ex. "Omsättning" */
  label: string;
  /** Formaterat värde, t.ex. "4 218 350 kr" */
  value: string;
  /** Förändring, t.ex. "+12,4 % mot förra månaden" */
  delta?: string;
  deltaDirection?: "up" | "down" | "flat";
  /** Liten grå fotnot, t.ex. "Uppdaterad 08:00" */
  hint?: string;
  /** Toningsfärg i bakgrunden */
  tone?: "blue" | "orange" | "green" | "neutral";
  style?: React.CSSProperties;
}


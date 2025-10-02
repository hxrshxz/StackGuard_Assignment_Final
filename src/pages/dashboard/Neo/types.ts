// Dashboard component interfaces and types
export interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  [key: string]: any;
}

export interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  change: string;
  changeType: "good" | "bad";
  bgColor: string;
  delay: number;
}

export interface ChartProps {
  delay: number;
}

export interface SeverityBadgeProps {
  sev: "High" | "Medium" | "Low";
}

export interface RiskBadgeProps {
  risk: "High" | "Medium" | "Low";
}

export interface ActivityDataItem {
  day: string;
  value: number;
  color: string;
}

export interface NHIItem {
  name: string;
  value: number;
  color: string;
}

export interface ThreatItem {
  severity: "High" | "Medium" | "Low";
  desc: string;
  source: "AWS" | "GCP" | "GitHub";
  action: string;
}

export interface AttackVector {
  name: string;
  risk: "High" | "Medium" | "Low";
}

export interface Threat {
  severity: "High" | "Medium" | "Low";
  desc: string;
  source: "AWS" | "GCP" | "GitHub";
  action: string;
}

export type ThreatSeverity = "High" | "Medium" | "Low";

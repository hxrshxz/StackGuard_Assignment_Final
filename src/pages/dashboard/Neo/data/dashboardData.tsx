import React from "react";
import {
  KeyIcon,
  BotIcon,
  SirenIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon,
} from "../icons";
import { StatCardProps, NHIItem, AttackVector, Threat } from "../types";
const AwsIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const GcpIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 12v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12c0-2.2-1.8-4-4-4s-4 1.8-4 4v2c0 1.1.9 2 2 2h2.5" />
    <path d="M12 12h-2.5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2H12c2.2 0 4-1.8 4-4s-1.8-4-4-4Z" />
    <path d="M12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Data for the main statistic cards
export const statsData: Omit<StatCardProps, "delay">[] = [
  {
    icon: <KeyIcon />,
    title: "Exposed Secrets",
    value: 72,
    change: "+3",
    changeType: "bad",
    bgColor: "bg-yellow-200",
  },
  {
    icon: <BotIcon />,
    title: "Zombie NHIs",
    value: 1248,
    change: "-12",
    changeType: "good",
    bgColor: "bg-blue-200",
  },
  {
    icon: <SirenIcon />,
    title: "High-Risk Alerts",
    value: 19,
    change: "+2",
    changeType: "bad",
    bgColor: "bg-red-300",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Compliance",
    value: 98,
    change: "+2.5%",
    changeType: "good",
    bgColor: "bg-green-200",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Remediation Rate",
    value: 89,
    change: "+5%",
    changeType: "good",
    bgColor: "bg-teal-200",
  },
  {
    icon: <ZapIcon />,
    title: "Attack Paths",
    value: 315,
    change: "+15",
    changeType: "bad",
    bgColor: "bg-purple-200",
  },
];

// Data for the donut chart
export const nhiDistributionData: NHIItem[] = [
  { name: "API Keys", value: 50, color: "#FBBF24" },
  { name: "Service Accounts", value: 40, color: "#60A5FA" },
  { name: "CI/CD Tokens", value: 30, color: "#EC4899" },
  { name: "Others", value: 20, color: "#A78BFA" },
];

// Data for the attack vectors list
export const topAttackVectorsData: AttackVector[] = [
  { name: "Credential Stuffing", risk: "High" },
  { name: "Leaked API Keys", risk: "High" },
  { name: "Phishing", risk: "Medium" },
  { name: "Insider Threat", risk: "Medium" },
];

// Data for the live threat feed
export const liveThreatsData: Threat[] = [
  {
    severity: "High",
    desc: "Hardcoded AWS Key found",
    source: "AWS",
    action: "Investigate",
  },
  {
    severity: "High",
    desc: "Overprivileged GCP Account",
    source: "GCP",
    action: "Review",
  },
  {
    severity: "Medium",
    desc: "CI/CD token nearing expiration",
    source: "GitHub",
    action: "Rotate",
  },
  {
    severity: "Low",
    desc: "Unused service account",
    source: "AWS",
    action: "Disable",
  },
  {
    severity: "Medium",
    desc: "Public S3 Bucket detected",
    source: "AWS",
    action: "Remediate",
  },
  {
    severity: "High",
    desc: "Admin access key compromised",
    source: "AWS",
    action: "Investigate",
  },
  {
    severity: "Medium",
    desc: "Kubernetes secret exposed",
    source: "GCP",
    action: "Rotate",
  }
];

// A map for source icons to avoid logic in JSX
export const sourceIcons: Record<Threat["source"], React.ReactNode> = {
  AWS: <AwsIcon className="w-6 h-6 text-orange-500" />,
  GCP: <GcpIcon className="w-6 h-6 text-blue-500" />,
  GitHub: <GithubIcon className="w-6 h-6 text-black" />,
};

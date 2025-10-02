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
    title: "Unique Visitors",
    value: "10.5k",
    change: "-10%",
    changeType: "bad",
    bgColor: "bg-yellow-200",
  },
  {
    icon: <BotIcon />,
    title: "Page Views",
    value: "18.3k",
    change: "-10%",
    changeType: "bad",
    bgColor: "bg-blue-200",
  },
  {
    icon: <SirenIcon />,
    title: "Sessions",
    value: "12.4k",
    change: "-10%",
    changeType: "bad",
    bgColor: "bg-red-300",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Session Duration",
    value: "4m",
    change: "-10%",
    changeType: "bad",
    bgColor: "bg-green-200",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Bounce Rate",
    value: "42%",
    change: "+5%",
    changeType: "bad",
    bgColor: "bg-teal-200",
  },
  {
    icon: <ZapIcon />,
    title: "Active Users",
    value: "2.8k",
    change: "-8%",
    changeType: "bad",
    bgColor: "bg-purple-200",
  },
];

// Data for the donut chart
export const nhiDistributionData: NHIItem[] = [
  { name: "Web Analytics", value: 40, color: "#10B981" },
  { name: "Session Replay", value: 30, color: "#F59E0B" },
  { name: "Product Analytics", value: 20, color: "#3B82F6" },
  { name: "Feature Flags", value: 10, color: "#8B5CF6" },
];

// Data for the attack vectors list
export const topAttackVectorsData: AttackVector[] = [
  { name: "Dashboard Views", risk: "High" },
  { name: "User Sign-ups", risk: "High" },
  { name: "Feature Usage", risk: "Medium" },
  { name: "Page Interactions", risk: "Medium" },
];

// Data for the live threat feed
export const liveThreatsData: Threat[] = [
  {
    severity: "High",
    desc: "User completed checkout flow",
    source: "AWS",
    action: "View Details",
  },
  {
    severity: "High",
    desc: "New feature flag activated",
    source: "GCP",
    action: "Monitor",
  },
  {
    severity: "Medium",
    desc: "Session replay recorded",
    source: "GitHub",
    action: "Watch",
  },
  {
    severity: "Low",
    desc: "Dashboard viewed by user",
    source: "AWS",
    action: "Track",
  },
  {
    severity: "Medium",
    desc: "A/B test result available",
    source: "AWS",
    action: "Analyze",
  },
  {
    severity: "High",
    desc: "Conversion goal achieved",
    source: "AWS",
    action: "Review",
  },
  {
    severity: "Medium",
    desc: "User feedback submitted",
    source: "GCP",
    action: "Read",
  },
];

// A map for source icons to avoid logic in JSX
export const sourceIcons: Record<Threat["source"], React.ReactNode> = {
  AWS: <AwsIcon className="w-6 h-6 text-orange-500" />,
  GCP: <GcpIcon className="w-6 h-6 text-blue-500" />,
  GitHub: <GithubIcon className="w-6 h-6 text-black" />,
};

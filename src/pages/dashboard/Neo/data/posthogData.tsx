// PostHog Apps Data

export interface PostHogApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: string;
  stages: ("startup" | "growth" | "scale")[];
  previewImage?: string;
}

export const posthogApps: PostHogApp[] = [
  {
    id: "web-analytics",
    name: "Web Analytics",
    description: "Privacy-focused web analytics",
    icon: "📊",
    color: "from-green-400 to-green-500",
    category: "Analytics",
    stages: ["startup", "growth", "scale"],
    previewImage: "/analytics-preview.svg",
  },
  {
    id: "session-replay",
    name: "Session Replay",
    description: "Watch people use your product",
    icon: "🎬",
    color: "from-orange-400 to-orange-500",
    category: "Analytics",
    stages: ["growth", "scale"],
  },
  {
    id: "product-analytics",
    name: "Product Analytics",
    description: "Understand user behavior",
    icon: "📈",
    color: "from-blue-400 to-blue-500",
    category: "Analytics",
    stages: ["startup", "growth", "scale"],
  },
  {
    id: "feature-flags",
    name: "Feature Flags",
    description: "Toggle features on/off instantly",
    icon: "🚩",
    color: "from-green-400 to-green-500",
    category: "Development",
    stages: ["startup", "growth", "scale"],
  },
  {
    id: "error-tracking",
    name: "Error Tracking",
    description: "Find and fix bugs faster",
    icon: "⚠️",
    color: "from-yellow-400 to-yellow-500",
    category: "Development",
    stages: ["startup", "growth", "scale"],
  },
  {
    id: "surveys",
    name: "Surveys",
    description: "Collect feedback from users",
    icon: "💬",
    color: "from-pink-400 to-pink-500",
    category: "Feedback",
    stages: ["growth", "scale"],
  },
  {
    id: "llm-analytics",
    name: "LLM Analytics",
    description: "Monitor AI model performance",
    icon: "🤖",
    color: "from-purple-400 to-purple-500",
    category: "AI",
    stages: ["growth", "scale"],
  },
  {
    id: "experiments",
    name: "Experiments",
    description: "A/B test your product changes",
    icon: "🧪",
    color: "from-indigo-400 to-indigo-500",
    category: "Optimization",
    stages: ["growth", "scale"],
  },
  {
    id: "custom-dashboards",
    name: "Custom dashboards",
    description: "Build your own analytics views",
    icon: "📋",
    color: "from-cyan-400 to-cyan-500",
    category: "Visualization",
    stages: ["growth", "scale"],
  },
  {
    id: "cdp",
    name: "CDP",
    description: "Customer Data Platform",
    icon: "🔄",
    color: "from-teal-400 to-teal-500",
    category: "Data",
    stages: ["scale"],
  },
  {
    id: "data-warehouse",
    name: "Data warehouse",
    description: "Query & visualize product and third party data together",
    icon: "🏢",
    color: "from-purple-500 to-purple-600",
    category: "Data",
    stages: ["scale"],
  },
];

export const appCategories = [
  "All",
  "Analytics",
  "Development",
  "Feedback",
  "AI",
  "Optimization",
  "Visualization",
  "Data",
];

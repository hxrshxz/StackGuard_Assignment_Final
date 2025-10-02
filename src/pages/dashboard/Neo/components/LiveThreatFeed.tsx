import React, { useState, useMemo } from "react";
import { Threat, ThreatSeverity } from "../types";
import { sourceIcons } from "../data/dashboardData"; // Assuming icons map is in data file

// Style mapping for priority levels
const priorityBadgeStyles: Record<ThreatSeverity, string> = {
  High: "bg-red-200 text-red-900",
  Medium: "bg-yellow-200 text-yellow-900",
  Low: "bg-blue-200 text-blue-900",
};

const PriorityBadge = ({ severity }: { severity: ThreatSeverity }) => (
  <span
    className={`px-1.5 py-0.5 text-xs font-bold rounded-md border-2 border-black ${priorityBadgeStyles[severity]}`}
  >
    {severity}
  </span>
);

interface Props {
  delay: number;
  threats: Threat[];
}

const LiveThreatFeed = ({ delay, threats }: Props) => {
  const [activeFilter, setActiveFilter] = useState<ThreatSeverity | "All">(
    "All"
  );

  const filteredThreats = useMemo(() => {
    if (activeFilter === "All") return threats;
    return threats.filter((threat) => threat.severity === activeFilter);
  }, [activeFilter, threats]);

  const filterTabs: (ThreatSeverity | "All")[] = [
    "All",
    "High",
    "Medium",
    "Low",
  ];

  return (
    <div
      className="neo-card lg:col-span-2 p-4 animate-fadeInUp flex flex-col h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-md">Live Activity Feed</h3>
        <div className="flex space-x-1 p-1 bg-gray-100 border-2 border-black rounded-md">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-2 py-0.5 text-xs font-semibold rounded ${
                activeFilter === tab
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2 overflow-y-auto pr-1 flex-1 min-h-0">
        {filteredThreats.map((threat, i) => (
          <div
            key={`${threat.desc}-${i}`} // More robust key
            className="flex items-center justify-between p-2 bg-gray-50 border-2 border-black rounded-lg animate-fadeInUp"
            style={{ animationDelay: `${delay / 1000 + 0.2 + i * 0.05}s` }}
          >
            <div className="flex py-2 items-center flex-1 truncate pr-3">
              <div className="mr-3 p-1.5 bg-white border-2 border-black rounded-md">
                {sourceIcons[threat.source]}
              </div>
              <div>
                <p className="font-semibold truncate text-sm">{threat.desc}</p>
                <PriorityBadge severity={threat.severity} />
              </div>
            </div>
            <button className="neo-btn bg-white text-xs px-2.5 py-1 shrink-0">
              {threat.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveThreatFeed;

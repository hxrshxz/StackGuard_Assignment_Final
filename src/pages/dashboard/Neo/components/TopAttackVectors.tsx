import React from "react";
import { ChartProps, AttackVector, RiskBadgeProps } from "../types";

export const TopAttackVectors: React.FC<ChartProps> = ({ delay }) => {
  const vectors: AttackVector[] = [
    { name: "Credential Stuffing", risk: "High" },
    { name: "Leaked API Keys", risk: "High" },
    { name: "Phishing", risk: "Medium" },
    { name: "Insider Threat", risk: "Medium" },
  ];

  const RiskBadge: React.FC<RiskBadgeProps> = ({ risk }) => {
    const colors = {
      High: "bg-red-300 text-red-900",
      Medium: "bg-yellow-300 text-yellow-900",
      Low: "bg-blue-300 text-blue-900",
    };

    return (
      <span
        className={`px-2 py-1 text-xs font-extrabold rounded-md border-2 border-black shadow-[1px_1px_0px_black] ${colors[risk]}`}
      >
        {risk}
      </span>
    );
  };

  return (
    <div
      className="neo-card p-4 animate-fadeInUp h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-purple-300 border-2 border-black rounded-lg p-2 mb-3 shadow-[2px_2px_0px_black]">
        <h3 className="font-extrabold text-md text-black">
          Top Attack Vectors
        </h3>
      </div>
      <div className="flex-grow space-y-3">
        {vectors.map((v, index) => (
          <div
            key={v.name}
            className="flex justify-between items-center text-sm bg-gray-50 p-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_black] hover:shadow-[3px_3px_0px_black] hover:transform hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
            style={{
              animationDelay: `${delay + 200 + index * 100}ms`,
            }}
          >
            <p className="font-bold text-black">{v.name}</p>
            <RiskBadge risk={v.risk} />
          </div>
        ))}
      </div>
    </div>
  );
};

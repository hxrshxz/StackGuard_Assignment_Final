import React from "react";
import { ChartProps, NHIItem } from "../types";

import { nhiDistributionData } from "../data/dashboardData";

export const NHIDistributionChart: React.FC<ChartProps> = ({ delay }) => {
  const data: NHIItem[] = nhiDistributionData;

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  let accumulatedOffset = 0;

  return (
    <div
      className="neo-card p-4 flex flex-col animate-fadeInUp h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-blue-300 border-2 border-black rounded-lg p-2 mb-3 shadow-[2px_2px_0px_black]">
        <h3 className="font-extrabold text-md text-black">
          Analytics Apps Usage
        </h3>
      </div>
      <div className="flex-grow flex items-center justify-center gap-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 110 110">
            <circle
              stroke="#e5e7eb"
              strokeWidth="15"
              fill="transparent"
              r={radius}
              cx="55"
              cy="55"
            ></circle>
            {data.map((item, index) => {
              const dasharray = (item.value / 100) * circumference;
              const initialOffset = accumulatedOffset;
              accumulatedOffset += dasharray;

              return (
                <circle
                  key={index}
                  stroke={item.color}
                  strokeWidth="15"
                  fill="transparent"
                  r={radius}
                  cx="55"
                  cy="55"
                  strokeDasharray={`${dasharray} ${circumference}`}
                  strokeLinecap="round"
                  transform="rotate(-90 55 55)"
                  style={{
                    strokeDashoffset: circumference - initialOffset,
                    animation: `drawDonut 1.5s ${
                      delay / 1000 + 0.2 + index * 0.1
                    }s ease-out forwards`,
                  }}
                ></circle>
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_black]">
              <span className="text-2xl font-extrabold text-black">1.3k</span>
            </div>
            <span className="text-xs font-bold text-black mt-1 bg-yellow-300 px-2 py-1 rounded border border-black">
              Total
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center text-sm bg-gray-50 p-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_black] hover:shadow-[3px_3px_0px_black] hover:transform hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-150"
            >
              <span
                className="w-4 h-4 rounded-sm mr-3 border-2 border-black shadow-[1px_1px_0px_black]"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="font-bold text-black">{item.name}</span>
              <span className="ml-auto font-extrabold text-black pl-4">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

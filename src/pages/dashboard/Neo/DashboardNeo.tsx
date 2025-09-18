// src/components/Dashboard.tsx

import React, { useState } from "react";
import { ShieldWarningIcon, BellIcon } from "./icons";
import { NeoStyles } from "./styles";
import { StatCardProps } from "./types";

// Import data
import {
  statsData,
  nhiDistributionData,
  topAttackVectorsData,
  liveThreatsData,
} from "./data/dashboardData";

// Import child components
import StatCard from "./components/StatCard";
import { NHIDistributionChart } from "./components/NHIDistributionChart";
import { TopAttackVectors } from "./components/TopAttackVectors";
import LiveThreatFeed from "./components/LiveThreatFeed";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navTabs = ["Dashboard", "Discovery", "Remediation"];

  return (
    <>
      {/* Component to inject global styles for the neobrutalism theme */}
      <NeoStyles />
      <div className="text-black min-h-screen bg-[#F5F5F5] p-4 sm:p-6">
        <div className="neo-dashboard-container w-full">
          {/* Main Dashboard Component */}
          <div
            className="neo-card bg-white p-6 animate-fadeInUp"
            style={{ animationDelay: "50ms" }}
          >
            {/* Header with Logo, Navigation and User */}
            <header className="flex items-center justify-between mb-6 min-w-0 gap-4">
              {/* Logo Section */}
              <div className="neo-card bg-gradient-to-r from-green-100 to-blue-100 p-3 flex-shrink-0">
                <div className="flex items-center space-x-1">
                  <div className="neo-btn bg-green-400 px-3 py-2 flex items-center justify-center min-w-[44px] h-[44px]">
                    <span className="text-xl font-extrabold text-black">S</span>
                  </div>
                  <h1 className="text-xl font-extrabold text-black">
                    tackGuard
                  </h1>
                </div>
              </div>

              {/* Navigation Tabs - Center */}
              <div className="neo-card bg-gray-50 p-2 flex-shrink-0">
                <nav className="flex gap-2">
                  {navTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`neo-btn px-4 py-2 text-sm font-semibold ${
                        activeTab === tab ? "bg-green-400" : "bg-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              {/* User Section - Right */}
              <div className="neo-card bg-blue-50 p-2 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <button
                    className="neo-btn bg-white p-3"
                    aria-label="View notifications"
                  >
                    <BellIcon className="w-5 h-5" />
                  </button>
                  <img
                    src="https://i.pravatar.cc/36"
                    alt="User profile avatar"
                    className="w-9 h-9 rounded-full border-2 border-black"
                  />
                </div>
              </div>
            </header>

            {/* Statistics Grid */}
            <div className="neo-stats-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-6">
              {statsData.map(
                (stat: Omit<StatCardProps, "delay">, index: number) => (
                  <StatCard
                    key={stat.title}
                    {...stat}
                    delay={200 + index * 50}
                  />
                )
              )}
            </div>

            {/* Main Content Grid */}
            <div className="flex flex-row flex-1 gap-6">
              <div className="flex flex-col gap-6 w-96 flex-shrink-0">
                <div className="flex-1">
                  <NHIDistributionChart delay={500} />
                </div>
                <div className="flex-1">
                  <TopAttackVectors delay={600} />
                </div>
              </div>
              <div className="flex-1 w-full">
                <LiveThreatFeed delay={700} threats={liveThreatsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// PostHog App Card Component
import React from "react";

interface AppCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  onExplore: () => void;
  delay?: number;
}

export const AppCard: React.FC<AppCardProps> = ({
  name,
  description,
  icon,
  color,
  onExplore,
  delay = 0,
}) => {
  return (
    <div
      className="neo-card bg-white p-6 hover:scale-105 transition-transform cursor-pointer animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`neo-card bg-gradient-to-br ${color} p-4 text-3xl`}>
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-black mb-2">{name}</h3>
      <p className="text-gray-700 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      <button
        onClick={onExplore}
        className="neo-btn bg-black text-white px-6 py-2 w-full font-semibold hover:bg-gray-800 transition-colors"
      >
        Explore
      </button>
    </div>
  );
};

interface SidebarAppItemProps {
  name: string;
  icon: string;
  color: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarAppItem: React.FC<SidebarAppItemProps> = ({
  name,
  icon,
  color,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
        isActive
          ? "bg-gray-100 border-2 border-black"
          : "hover:bg-gray-50 border-2 border-transparent"
      }`}
    >
      <div className={`neo-card-sm bg-gradient-to-br ${color} p-2 text-lg`}>
        {icon}
      </div>
      <span
        className={`font-semibold ${isActive ? "text-black" : "text-gray-700"}`}
      >
        {name}
      </span>
    </button>
  );
};

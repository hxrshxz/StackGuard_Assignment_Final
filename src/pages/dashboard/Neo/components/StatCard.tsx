import { useCountUp } from "../hooks/useCountUp";
import { StatCardProps } from "../types";

const changeTypeStyles: Record<StatCardProps["changeType"], string> = {
  good: "bg-green-200 text-green-900",
  bad: "bg-red-200 text-red-900",
};

const StatCard = ({
  icon,
  title,
  value,
  change,
  changeType,
  bgColor,
  delay,
}: StatCardProps) => {
  const animatedValue = useCountUp(value);

  return (
    <div
      className={`neo-card neo-stat-card neo-card-hover p-4 flex flex-col justify-between animate-fadeInUp ${bgColor}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start">
        <div className="p-2 bg-white border-2 border-black rounded-md">
          {icon}
        </div>
        <span
          className={`font-semibold px-2 py-0.5 text-xs rounded-md border-2 border-black ${changeTypeStyles[changeType]}`}
        >
          {change}
        </span>
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">{animatedValue}</p>
        <p className="font-semibold text-gray-700 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;

import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: string;
  trend?: "up" | "down";
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend = "up" }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
        <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>
      <p className="text-[#111518] dark:text-white tracking-tight text-3xl font-extrabold">{value}</p>
      {change && (
        <div className="flex items-center gap-1">
          <span className={`material-symbols-outlined text-sm ${trend === "up" ? "text-[#078836]" : "text-red-500"}`}>
            {trend === "up" ? "trending_up" : "trending_down"}
          </span>
          <p className={`${trend === "up" ? "text-[#078836]" : "text-red-500"} text-xs font-bold leading-normal`}>
            {change}
          </p>
        </div>
      )}
    </div>
  );
};

export default StatCard;

import React from "react";

interface AlertCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ title, value, subtitle, icon }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-5 bg-amber-50 dark:bg-amber-900/20 shadow-sm border border-amber-200 dark:border-amber-800/50">
      <div className="flex items-center justify-between">
        <p className="text-amber-700 dark:text-amber-400 text-sm font-semibold">{title}</p>
        <span className="material-symbols-outlined text-amber-600">{icon}</span>
      </div>
      <p className="text-amber-900 dark:text-amber-200 tracking-tight text-3xl font-extrabold">{value}</p>
      <p className="text-amber-600 dark:text-amber-500 text-xs font-bold uppercase tracking-wider">{subtitle}</p>
    </div>
  );
};

export default AlertCard;

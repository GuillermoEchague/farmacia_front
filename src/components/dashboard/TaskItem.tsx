import React from "react";

interface TaskItemProps {
  icon: string;
  title: string;
  subtitle: string;
  actionLabel: string;
  onAction?: () => void;
  variant?: "primary" | "secondary";
  iconBgColor?: string;
  iconTextColor?: string;
}

const TaskItem: React.FC<TaskItemProps> = ({
  icon,
  title,
  subtitle,
  actionLabel,
  onAction,
  variant = "primary",
  iconBgColor = "bg-red-100 dark:bg-red-900/30",
  iconTextColor = "text-red-600"
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className={`size-10 rounded-lg ${iconBgColor} ${iconTextColor} flex items-center justify-center`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-bold dark:text-white">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
      <button
        onClick={onAction}
        className={`${
          variant === "primary"
            ? "bg-primary text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        } text-xs font-bold px-4 py-2 rounded-lg transition-colors hover:opacity-90`}
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default TaskItem;

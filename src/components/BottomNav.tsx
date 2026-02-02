import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "grid_view", path: "/dashboard" },
    { label: "Inventory", icon: "package_2", path: "/inventory" },
    { label: "Sales", icon: "shopping_cart", path: "/sales" },
    { label: "Reports", icon: "analytics", path: "/reports" },
    { label: "Users", icon: "group", path: "/users" },
  ];

  return (
    <nav className="sticky bottom-0 z-40 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 flex justify-around p-3 pb-6">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? "material-symbols-fill" : ""}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;

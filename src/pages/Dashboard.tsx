import "../styles/dashboard.css";
import StatCard from "../components/dashboard/StatCard";
import AlertCard from "../components/dashboard/AlertCard";
import TaskItem from "../components/dashboard/TaskItem";
import BottomNav from "../components/BottomNav";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="menu">☰</div>
        <h1>Dashboard Overview</h1>
        <div className="header-actions">🔔 👤</div>
      </header>

      {/* Stats */}
      <StatCard
        title="Total Products"
        value="1,240"
        change="+2.4% vs last month"
      />

      <AlertCard
        title="Low Stock Alerts"
        value="12 Items"
        subtitle="ACTION REQUIRED"
      />

      <StatCard
        title="Sales Today"
        value="$4,250.00"
        change="+15% from yesterday"
      />

      {/* Sales Trends */}
      <section className="card">
        <div className="sales-header">
          <div>
            <h3>Sales Trends</h3>
            <p>Daily revenue for current week</p>
          </div>
          <span className="badge">$28.5k Total</span>
        </div>

        <div className="week-days">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <span key={day} className={day === "WED" ? "active" : ""}>
              {day}
            </span>
          ))}
        </div>
      </section>

      {/* Tasks */}
      <section className="tasks">
        <div className="tasks-header">
          <h3>Recent Inventory Tasks</h3>
          <a href="#">View All</a>
        </div>

        <TaskItem
          icon="💊"
          title="Amoxicillin 500mg"
          subtitle="Stock: 4 units remaining"
          action="Restock"
        />

        <TaskItem
          icon="📦"
          title="New Delivery Arrived"
          subtitle="Batch #4429 - 15 SKUs"
          action="Log"
          secondary
        />
      </section>

      <BottomNav />
    </div>
  );
};

export default Dashboard;

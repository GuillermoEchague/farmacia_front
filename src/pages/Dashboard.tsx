import MobileLayout from "../components/MobileLayout";
import StatCard from "../components/dashboard/StatCard";
import AlertCard from "../components/dashboard/AlertCard";
import TaskItem from "../components/dashboard/TaskItem";

const Dashboard = () => {
  return (
    <MobileLayout>
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 flex items-center bg-white dark:bg-background-dark p-4 border-b border-gray-100 dark:border-gray-800 justify-between">
        <div className="flex items-center gap-4">
          <button className="text-primary flex size-10 shrink-0 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-tight">Dashboard Overview</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-10 items-center justify-center rounded-lg bg-transparent text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary overflow-hidden border-2 border-primary/20">
            <span className="material-symbols-outlined material-symbols-fill">person</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-4 gap-6">
        {/* Summary Stats */}
        <section>
          <div className="grid grid-cols-1 gap-4">
            <StatCard
              title="Total Products"
              value="1,240"
              change="+2.4% vs last month"
              icon="inventory_2"
              trend="up"
            />
            <AlertCard
              title="Low Stock Alerts"
              value="12 Items"
              subtitle="Action Required"
              icon="warning"
            />
            <StatCard
              title="Sales Today"
              value="$4,250.00"
              change="+15% from yesterday"
              icon="payments"
              trend="up"
            />
          </div>
        </section>

        {/* Sales Trends Chart Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-tight">Sales Trends</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">Daily revenue for current week</p>
            </div>
            <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
              $28.5k Total
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-7 gap-3 items-end h-48 px-2">
              {[
                { day: "Mon", height: "40%", active: false },
                { day: "Tue", height: "30%", active: false },
                { day: "Wed", height: "85%", active: true },
                { day: "Thu", height: "65%", active: false },
                { day: "Fri", height: "45%", active: false },
                { day: "Sat", height: "75%", active: false },
                { day: "Sun", height: "95%", active: false },
              ].map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2 group">
                  <div
                    className={`${item.active ? 'bg-primary' : 'bg-primary/20 dark:bg-primary/10 hover:bg-primary'} transition-all rounded-t-lg w-full`}
                    style={{ height: item.height }}
                  ></div>
                  <span className={`${item.active ? 'text-primary' : 'text-gray-400'} text-[11px] font-bold uppercase`}>
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access / Recent Activity */}
        <section className="mb-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-[#111518] dark:text-white text-base font-bold leading-tight">Recent Inventory Tasks</h3>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            <TaskItem
              icon="pill"
              title="Amoxicillin 500mg"
              subtitle="Stock: 4 units remaining"
              actionLabel="Restock"
              variant="primary"
            />
            <TaskItem
              icon="receipt_long"
              title="New Delivery Arrived"
              subtitle="Batch #4429 - 15 SKUs"
              actionLabel="Log"
              variant="secondary"
              iconBgColor="bg-green-100 dark:bg-green-900/30"
              iconTextColor="text-green-600"
            />
          </div>
        </section>
      </main>
    </MobileLayout>
  );
};

export default Dashboard;

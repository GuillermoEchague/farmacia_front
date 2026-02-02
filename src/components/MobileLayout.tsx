import React from "react";
import BottomNav from "./BottomNav";

interface MobileLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, showNav = true }) => {
  return (
    <div className="flex justify-center min-h-screen bg-background-light dark:bg-background-dark">
      <div className="relative flex h-auto min-h-screen w-full max-w-[480px] flex-col bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        {showNav && <BottomNav />}
      </div>
    </div>
  );
};

export default MobileLayout;

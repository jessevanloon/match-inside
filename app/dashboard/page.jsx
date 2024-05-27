import DashboardTracker from "@/components/DashboardTracker";
import React from "react";

const page = () => {
  return (
    <div className="bg-dark-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 py-12 justify-between gap-5">
          <DashboardTracker title="Goal counter" data="14" />
          <DashboardTracker title="Assist counter" data="16" />
          <DashboardTracker title="Minutes played" data="920" />
          <DashboardTracker title="Wins" data="12" />
          <DashboardTracker title="Loses" data="6" />
          <DashboardTracker title="draws" data="2" />
        </div>
      </div>
    </div>
  );
};

export default page;

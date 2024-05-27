import DashboardTracker from "@/components/DashboardTracker";
import FormStats from "@/components/FormStats";
import React from "react";

const page = () => {
  return (
    <div className="bg-dark-background">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 py-12 justify-between gap-5">
            <DashboardTracker title="Goal counter" data="14" />
            <DashboardTracker title="Assist counter" data="16" />
            <DashboardTracker title="Minutes played" data="920" />
            <DashboardTracker title="Left foot" data="12" />
            <DashboardTracker title="Right foot" data="6" />
            <DashboardTracker title="Header" data="2" />
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex-1">
              <FormStats />
            </div>
            <div className="flex-1">
              <div className="bg-light-dark-background p-6 rounded-xl">
                All data
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

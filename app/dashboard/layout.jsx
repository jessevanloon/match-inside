import React from 'react';
import DashboardMenu from '@/components/Dashboard-menu';
import DashboardTopMenu from '@/components/Dashboard-top-menu';

const layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col	">
      <DashboardTopMenu />
      <div class="grid grid-cols-[auto,1fr] h-full">
        <DashboardMenu />
        {children}
      </div>
    </div>
  );
};

export default layout;

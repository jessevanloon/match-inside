import React from 'react';
import DashboardMenu from '@/components/Dashboard-menu';
import DashboardTopMenu from '@/components/Dashboard-top-menu';
import Title from '@/components/Title';

const layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col	">
      <DashboardTopMenu />
      <div class="grid grid-cols-[auto,1fr] h-full">
        <DashboardMenu />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default layout;

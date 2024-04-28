import DashboardMenu from '@/components/Dashboard-menu';
import Title from '@/components/Title';
import React from 'react';

const pageDashoard = () => {
  return (
    <div className="">
      <div className="inner flex flex-col gap-5	">
        <Title name="Overview" />
        <div className="content-wrap grid grid-cols-3 gap-5">
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body p-5">
              <h2 className="card-title text-lg	">Matches</h2>
            </div>
          </div>
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body p-5">
              <h2 className="card-title text-lg	">Goals</h2>
            </div>
          </div>
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body p-5">
              <h2 className="card-title text-lg	">Assists</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageDashoard;

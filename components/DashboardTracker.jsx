const DashboardTracker = (props) => {
  return (
    <div className="w-full">
      <div className="bg-light-dark-background p-6 rounded-xl">
        <div className="flex flex-col justify-center items-center text-4xl font-semibold">
          <div>{props.title}</div>
          <div className="text-accent-orange">{props.data}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTracker;

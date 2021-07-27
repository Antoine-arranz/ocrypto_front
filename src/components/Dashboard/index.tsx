import React from "react";
import Events from "./Events";
import Chart from "./Chart";
import Assets from "./Assets";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Chart />
      <Assets />
      <Events />
    </div>
  );
};

export default Dashboard;

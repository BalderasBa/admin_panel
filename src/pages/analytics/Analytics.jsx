import "./analytics.css";
import React from 'react'
import { userData } from "../../data";
import Chart from "../../components/chart/Chart";

function Analytics() {
  return (
    <div className="analytics">
        <Chart
        data={userData}
        title="Users Analystics"
        grid
        dataKey="Active Users"
      />
    </div>
  )
}

export default Analytics
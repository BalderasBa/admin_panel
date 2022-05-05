import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({title,data,dataKey,grid}) {
 
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <XAxis dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="active user"
            stroke="#5550bd"
            activeDot={{ r: 8 }}
          />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import createChartData from "./createChatData";

const Chart = ({ data, title, aspect, id }) => {
  let chartData = createChartData(data, title);
  return (
    <div className="chart">
      <div className="title" id={id}>
        <h1>{title}</h1>
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={830}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 15, left: 15, bottom: 0 }}
        >
          <defs>
            <linearGradient id="title" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#090554" stopOpacity={0.8} />
              <stop offset="90%" stopColor="#0A1929" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" stroke="white" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={title}
            stroke="#090554"
            fillOpacity={1}
            fill="url(#title)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

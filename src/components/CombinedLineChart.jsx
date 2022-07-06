import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import createCombinedChartData from "./createCombinedChartData";

function CombinedLineChart({ temperature, wind, humidity, clouds, title }) {
  const data = createCombinedChartData(temperature, wind, humidity, clouds);
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>

      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={830}
          height={250}
          data={data}
          margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
          aspect={2}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="white" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#D21404"
            dot={false}
          />
          <Line type="monotone" dataKey="wind" stroke="#E0115F" dot={false} />
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#800000"
            dot={false}
          />
          <Line type="monotone" dataKey="clouds" stroke="#B43757" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default CombinedLineChart;

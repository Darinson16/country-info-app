"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PopulationCount } from "../../../../types";
import CustomMessage from "./CustomMessage";

export default function PopulationChart({ data }: { data: PopulationCount[] }) {
  if (data === undefined)
    return (
      <CustomMessage message="There is not population data for this country" />
    );

  return (
    <>
      <CustomMessage message="Population Chart" />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            labelStyle={{ color: "#000" }}
            itemStyle={{ color: "#000" }}
            cursor={{ fill: "#e5e7eb50" }}
          />
          <Legend />
          <Bar dataKey="value" name={"Population"} fill="#e5e7eb" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

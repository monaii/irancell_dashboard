import React from "react";
import {
	XAxis,
	YAxis,
	AreaChart,
	Area,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

const data = [
	{
		name: "7/1",
		value: 700,
	},
	{
		name: "7/10",
		value: 2000,
	},
	{
		name: "7/18",
		value: 4000,
	},
	{
		name: "7/25",
		value: 4000,
	},

	{
		name: "7/28",
		value: 2000,
	},
];

function StatisticsAreaChart() {
	return (
		<div className="linear-chart">
			<h5 className="ff-lalezar text-end mb-5">نمودار میزان مصرف کل</h5>
			<div style={{ height: "250px", width: "95%", textAlign: "left" }}>
				<ResponsiveContainer>
					<AreaChart data={data}>
						<XAxis dataKey="name" />
						{<YAxis type="category" />}
						<CartesianGrid horizontal="True" vertical="" />
						<YAxis type="category" width={100} />
						<Area
							type="monotone"
							dataKey="value"
							strokeWidth={5}
							stroke="rgba(253, 200, 22, 1)"
							fill="rgba(253, 200, 22, 0.6)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default StatisticsAreaChart;

import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 30 },
	{ name: "Group B", value: 70 },
];
const COLORS = ["#E4EBEC", "#FDC816"];

function StatusPieChart() {
	return (
		<ResponsiveContainer width="98%" height={200}>
			<PieChart>
				<Pie
					data={data}
					innerRadius={60}
					outerRadius={70}
					cornerRadius={5}
					fill=""
					dataKey="value">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default StatusPieChart;

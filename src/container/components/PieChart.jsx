import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Group A', value: 30 },
  { name: 'Group B', value: 70 },
]
const COLORS = ['#E4EBEC', '#FDC816']

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o'

  render() {
    return (
      <ResponsiveContainer width="98%" height={200}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={70}
            cornerRadius={5}
            fill=""
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

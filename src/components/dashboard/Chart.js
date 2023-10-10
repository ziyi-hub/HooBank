import React from 'react';
import { DASHBOARD_CHART } from "../../constants/dashboard"
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function Chart(props) {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Transactions</strong>
            <div className="mt-3 w-full flex-1 text-xs" >
                <ResponsiveContainer width="100%" height="100%" style={{height: '300px'}}>
                    <BarChart
                        width={500}
                        height={300}
                        data={DASHBOARD_CHART}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#0ea5e9" />
                        <Bar dataKey="Expense" fill="#ea580c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Chart;
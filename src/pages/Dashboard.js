import React from 'react';
import StatisGrid from "../components/dashboard/StatisGrid";
import Chart from "../components/dashboard/Chart";
import BuyerProfileChart from "../components/dashboard/BuyerProfileChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import PopularProducts from "../components/dashboard/PopularProducts";

function Dashboard(props) {
    return (
        <div className="flex gap-4 flex-col">
            <StatisGrid />
            <div className="flex flex-row gap-4 w-full">
                <Chart />
                <BuyerProfileChart />
            </div>

            <div className="flex flex-row gap-4 w-full">
                <RecentOrders />
                <PopularProducts />
            </div>
        </div>
    );
}

export default Dashboard;
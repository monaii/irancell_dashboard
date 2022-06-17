import React from "react";
import UserInfo from "./components/userInfo";
import SideNavigation from "./components/sideNavigation";
import UserStatus from "./components/userStatus";
import HeaderPoster from "./components/headerPoster";
import SuggestedPackagesTable from "./components/suggestedPackagesTable";
import StatisticsAreaChart from "./components/statisticsAreaChart";
import "./style.css";

function Home() {
	return (
		<div className=" my-irancell-page">
			<div className="row mx-0">
				<div className="col-xl-3 col-xxl-2 mt-3">
					<UserInfo />
					<UserStatus />
				</div>
				<div className="col-lg-7 col-xxl-8 mt-4">
					<HeaderPoster />
					<StatisticsAreaChart />
					<SuggestedPackagesTable />
				</div>
				<div className="col-lg-2 side-nav">
					<SideNavigation />
				</div>
			</div>
		</div>
	);
}

export default Home;

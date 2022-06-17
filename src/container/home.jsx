import React from "react";
import MyInformation from "./components/Information";
import Right from "./components/RightSide";
import Left from "./components/LeftSide";
import Header from "./components/Header";
import Mid from "./components/Middle";
import LineChart from "./components/AreaChart";
import "./style.css";

function Home() {
	return (
		<div className=" my-irancell-page">
			<div className="row mx-0">
				<div className="col-xl-3 col-xxl-2 mt-3">
					<MyInformation />
					<Left />
				</div>
				<div className="col-lg-7 col-xxl-8 mt-4">
					<Header />
					<LineChart />
					<Mid />
				</div>
				<div className="col-lg-2 side-nav">
					<Right />
				</div>
			</div>
		</div>
	);
}

export default Home;

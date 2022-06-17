import React from "react";
import download from "../../assets/images/download.png";
import { FaMailBulk, FaWifi } from "react-icons/fa";
import StatusPieChart from "./statusPieChart";

function UserStatus() {
	return (
		<div className="sim-card-info">
			<div>
				<div className="row flex-column justify-content-center align-items-center ">
					<h3 className="ff-lalezar text-center">شارژ باقی مانده سیمکارت</h3>
					<div className="pie-chart">
						<StatusPieChart />
						<span>6000 تومان</span>
					</div>
					<div className=" text-center">
						<button className="custom-button">سیمکارتت رو شارژ کن !</button>
					</div>
				</div>

				<div className="pe-4 pt-5">
					<p className="pe-3 text-end ff-lalezar fs-6 mb-4">خدمات فعال</p>

					<section className="mb-5">
						<div className="icon-box">
							<FaMailBulk color="rgba(253, 200, 22, 1)" size={20} />
						</div>
						<div>
							<p className="text-muted fw-bold">بسته پیامک هفتگی</p>
							<p className="text-muted fw-bold m-0">تا تاریخ 31 خرداد 1400 </p>
						</div>
					</section>
					<section>
						<div className="icon-box">
							<FaWifi color="rgba(253, 200, 22, 1)" size={20} />
						</div>
						<div>
							<p className="text-muted fw-bold">بسته اینترنت ماهانه</p>
							<p className="text-muted fw-bold m-0">تا تاریخ 12 خرداد 1400</p>
						</div>
					</section>
				</div>
			</div>

			<img src={download} alt="download" className="download-our-app" />
		</div>
	);
}

export default UserStatus;

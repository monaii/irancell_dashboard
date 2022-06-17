import React from "react";
import right_header from "../../assets/images/right_header.png";
import {
	FaLocationArrow,
	FaQuestion,
	FaSimCard,
	FaNetworkWired,
	FaTty,
	FaShoppingBasket,
	FaSearch,
	FaHubspot,
	FaRegPlusSquare,
} from "react-icons/fa";

function Right() {
	return (
		<div className="side-bar">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<img
					src={right_header}
					alt="header"
					width={152}
					height={37}
					style={{ margin: "24px 0 60px 0" }}
				/>

				<div className="search-box">
					<input type="text" placeholder="جستجو" dir="rtl" />
					<FaSearch color="#818181" size={20} />
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
					marginRight: 68,
				}}>
				<div style={{ width: "100%", marginBottom: 40 }}>
					<div className="side-bar--sub-menu main-page-button">
						<div className="active-border"></div>
						<p className="side-bar--active-option">صفحه اصلی</p>
					</div>

					<p className="sub-title">سرویس ها</p>

					<div className="side-bar--sub-menu">
						<p>شارژ سیمکارت</p>
						<FaRegPlusSquare color="#818181" size={20} />
					</div>

					<div className="side-bar--sub-menu">
						<p> اینترنت</p>
						<FaHubspot color="#818181" size={20} />
					</div>

					<div className="side-bar--sub-menu">
						<p> کارکرد و فروش</p>
						<FaShoppingBasket color="#818181" size={20} />
					</div>

					<div className="side-bar--sub-menu">
						<p> خدمات</p>
						<FaTty color="#818181" size={20} />
					</div>

					<p className="sub-title"> مدیریت</p>

					<div className="side-bar--sub-menu">
						<p> مدیریت خدمات</p>
						<FaNetworkWired color="#818181" size={20} />
					</div>

					<div className="side-bar--sub-menu">
						<p> مدیریت سیمکارت</p>
						<FaSimCard color="#818181" size={20} />
					</div>
				</div>

				<div className="side-bar--sub-menu">
					<p> سوالات متداول</p>
					<FaQuestion color="#818181" size={20} />
				</div>

				<div className="side-bar--sub-menu">
					<p> ارتباط با ما</p>
					<FaLocationArrow color="#818181" size={20} />
				</div>
			</div>
		</div>
	);
}

export default Right;

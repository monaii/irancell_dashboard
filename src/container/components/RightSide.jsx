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
	FaHome,
} from "react-icons/fa";

function Right() {
	return (
		<div className="side-bar">
			<div className="heading">
				<img src={right_header} alt="header" width={152} height={37} />

				<div className="search-box">
					<input type="text" placeholder="جستجو" dir="rtl" />
					<FaSearch color="#E7E7E7" size={20} />
				</div>
			</div>

			<div className="menu">
				<div className="menu-item main-page-button position-relative">
					<div className="active-border"></div>
					<p className="mb-0 fw-bolder ">صفحه اصلی</p>
					<FaHome color="#FDC816" size={20} />
				</div>

				<p className="sub-title">سرویس ها</p>

				<div className="menu-item">
					<p className="mb-0">شارژ سیمکارت</p>
					<FaRegPlusSquare color="#818181" size={20} />
				</div>

				<div className="menu-item">
					<p className="mb-0"> اینترنت</p>
					<FaHubspot color="#818181" size={20} />
				</div>

				<div className="menu-item">
					<p className="mb-0"> کارکرد و فروش</p>
					<FaShoppingBasket color="#818181" size={20} />
				</div>

				<div className="menu-item">
					<p className="mb-0"> خدمات</p>
					<FaTty color="#818181" size={20} />
				</div>

				<p className="sub-title"> مدیریت</p>

				<div className="menu-item">
					<p className="mb-0"> مدیریت خدمات</p>
					<FaNetworkWired color="#818181" size={20} />
				</div>

				<div className="menu-item">
					<p className="mb-0"> مدیریت سیمکارت</p>
					<FaSimCard color="#818181" size={20} />
				</div>

				<div className="menu-item mt-5">
					<p className="mb-0"> سوالات متداول</p>
					<FaQuestion color="#818181" size={20} />
				</div>

				<div className="menu-item">
					<p className="mb-0"> ارتباط با ما</p>
					<FaLocationArrow color="#818181" size={20} />
				</div>
			</div>
		</div>
	);
}

export default Right;

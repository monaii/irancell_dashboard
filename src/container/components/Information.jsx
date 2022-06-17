import React from "react";
import me from "../../assets/images/me.jpg";

function MyInformation() {
	return (
		<div className="my-irancell-page info-card">
			<section>
				<h1 className="ff-lalezar">سلام ، مونا پوراسماعیل</h1>
				<p>mona.prs2000@yahoo.com</p>
			</section>
			<img src={me} alt="pic" width={65} height={65} />
		</div>
	);
}

export default MyInformation;

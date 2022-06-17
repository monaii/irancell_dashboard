import React from "react";

function Mid() {
	const mockRowData = [
		{
			date: "14 شهریور 1401",
			packageTime: "بسته اینترنت سه‌ماهه",
			off: "20%",
			sum: "130،000",
		},
		{
			date: "12 خرداد 1401",
			packageTime: "بسته ترکیبی هفته‌ای",
			off: "45%",
			sum: "45،000",
		},
		{
			date: "15 تیر 1401",
			packageTime: "بسته اینترنت یکماهه",
			off: "50%",
			sum: "50،000",
		},
	];
	return (
		<div className="suggest-packages">
			<h5 className="ff-lalezar text-end mb-3">
				بسته های پیشنهادی مخصوص خود شما!
			</h5>

			<table dir="rtl">
				<tr>
					<th className="text-muted">تاریخ انقضا بسته</th>
					<th className="text-muted">نام بسته</th>
					<th className="text-muted"> تخفیف</th>
					<th className="text-muted">قیمت</th>
					<th></th>
				</tr>
				<tbody>
					{mockRowData.map((item) => (
						<tr>
							<td className="text-muted">{item.date}</td>
							<td className="text-muted">{item.packageTime}</td>
							<td className="text-muted">{item.off}</td>
							<td className="text-muted">{item.sum}</td>
							<td>
								<button className="buy-button">خرید</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Mid;

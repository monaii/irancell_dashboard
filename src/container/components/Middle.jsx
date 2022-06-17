import React from 'react'

function Mid() {
  const mockRowData = [
    {
      date: '14 شهریور 1401',
      packageTime: 'بسته اینترنت سه‌ماهه',
      off: '20%',
      sum: '130،000',
    },
    {
      date: '12 خرداد 1401',
      packageTime: 'بسته ترکیبی هفته‌ای',
      off: '45%',
      sum: '45،000',
    },
    {
      date: '15 تیر 1401',
      packageTime: 'بسته اینترنت یکماهه',
      off: '50%',
      sum: '50،000',
    },
  ]
  return (
    <div className="suggest-packages">
      <h1 style={{ float: 'right', padding: '0 20px 0 16px', fontSize: 20 }}>
        <br/>
        !بسته های پیشنهادی مخصوص خود شما
      </h1>
      <table dir="rtl">
        <tr style={{ textAlign: 'right', marginRight: 33 }}>
          <th style={{ paddingRight: 33 }}>تاریخ انقضا بسته</th>
          <th>نام بسته</th>
          <th style={{width: '120px'}}> تخفیف</th>
          <th>قیمت</th>
          <th></th>
        </tr>
        <tbody>
          {mockRowData.map((item) => (
            <tr>
              <td style={{ paddingRight: 33 }}>{item.date}</td>
              <td>{item.packageTime}</td>
              <td>{item.off}</td>
              <td>{item.sum}</td>
              <td>
                <button className="buy-button">خرید</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Mid

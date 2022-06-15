import React from 'react'
import download from '../assets/images/download.png'
import { FaMailBulk,
  FaWifi
} from 'react-icons/fa';
import PieChart from '../components/PieChart'

function Left() {
  return (
    <div className="sim-card-info">
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h3>شارژ باقی مانده سیمکارت</h3>
          <div style={{ position: 'relative', width: 200, height: 200 }}>
            <PieChart />
            <p
              style={{
                position: 'absolute',
                bottom: 60,
                left: 55,
                direction: 'rtl',
                color: '#00A3FF',
                fontSize:20,
              }}
            >
               6000 تومان
            </p>
          </div>

          <span
            style={{
              fontWeight: 400,
              fontSize: 15,
              direction: 'rtl',
              background: '#FDC816',
              color: 'white',
              width: 150,
              height: 30,
              textAlign: 'center',
              borderRadius: 5,
            }}
          >
            سیمکارتت رو شارژ کن!
          </span>
        </div>

        <div style={{ margin: '35px' }}>
          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'right',
            }}
          >
            خدمات فعال
          </p>

          <section>
            <div className="icon-box">
              <FaMailBulk color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div>
              <p className='sub-text'>بسته پیامک هفتگی</p>
              <p className='sub-text'>تا تاریخ 31 خرداد 1400 </p>
            </div>
          </section>
          <section>
            <div className="icon-box">
              <FaWifi color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div>
              <p className='sub-text'>بسته اینترنت ماهانه</p>
              <p className='sub-text'>تا تاریخ 12 خرداد 1400</p>
            </div>
          </section>
        </div>
      </div>

      <img src={download} alt="download" className="download-our-app" />
      
    </div>
  )
}

export default Left

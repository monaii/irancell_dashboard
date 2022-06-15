import './styles.css'
import MyInformation from './components/Information'
import Right from './components/RightSide'
import Left from './components/LeftSide'
import Heade from './components/Header'
import Mid from './components/Middle'
import LineChart from './components/AreaChart'


function App() {
  return (
    <div className="my-irancell-page">
      <aside>
        <MyInformation/>
        <Left />
      </aside>
      <main>
        <h1 style={{textAlign:"right",marginRight:"1rem",fontSize:"23px",fontWeight:400}}>صفحه اصلی</h1>
        <Heade/>
        <div
          style={{
            backgroundColor: 'white',
            marginBottom: '30px',
            borderRadius: '14px',
            height: 400,
          }}
        >
          <h1 style={{ float: 'right', padding: '0 20px 20px 14px',fontSize:20 }}>
            نمودار میزان مصرف کل
          </h1>
          <LineChart />
        </div>
        <Mid/>
      </main>
      <Right/>
    </div>
  )
}

export default App

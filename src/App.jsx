import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Heading from './components/Heading'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner />
      <Heading text="SmartPhones" />
      <div className='cardMain' style={{display:"flex",flexWrap:"wrap"}}>
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="89,999" image="https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp" />
      </div>
      <Heading text="Accessories" />
      <div className='cardMain' style={{display:"flex",flexWrap:"wrap"}}>
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="9,999" image="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp" />
      <Card isNew={true} title="realme C75" subtitle="Speed to Victory" price="9,999" image="https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp" />
      </div>

      
      <Footer/>


    </>
  )
}

export default App

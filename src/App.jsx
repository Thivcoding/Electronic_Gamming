import React from 'react'
import Navbar from './Components/Header/Navbar'
import BannerSlider from './Components/Main/Home/Benner'
import TopCategory from './Components/Main/TopCategory/TopCategory'
import BestSellers from './Components/Main/BestSellers/BestSellers'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <TopCategory/>
      <BestSellers/>
      <Footer/>
    </div>
  )
}

export default App
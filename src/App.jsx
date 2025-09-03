import React from 'react'
import Navbar from './Components/Header/Navbar'
import BannerSlider from './Components/Main/Home/Benner'
import TopCategory from './Components/Main/TopCategory/TopCategory'
import BestSellers from './Components/Main/BestSellers/BestSellers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <TopCategory/>
      <BestSellers/>
    </div>
  )
}

export default App
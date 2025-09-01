import React from 'react'
import Navbar from './Components/Header/Navbar'
import BannerSlider from './Components/Main/Home/Benner'
import TopCategory from './Components/Main/TopCategory/TopCategory'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider/>
      <TopCategory/>
    </div>
  )
}

export default App
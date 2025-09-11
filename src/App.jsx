import React from 'react'
import Navbar from './Components/Header/Navbar'
import BannerSlider from './Components/Main/Home/Benner'
import TopCategory from './Components/Main/TopCategory/TopCategory'
import BestSellers from './Components/Main/BestSellers/BestSellers'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailBestSeller from './Components/Main/BestSellers/DetailBestSeller'
import Cate_Controller from './Components/Main/TopCategory/Cate_Controller'

const App = () => {
  return (

    <BrowserRouter>
          <Navbar/>
      <Routes>
          {/* route home page */}
          <Route path='/' element={
              <div>
                    <BannerSlider/>
                    <TopCategory/>
                    <BestSellers/>
                  <Footer/>
              </div>
          }/>

          {/* route for product in best seller */}
          <Route path='/category/product/:id' element={<DetailBestSeller/>} />

          {/* top category */}
          <Route path='/Controllers' element={<Cate_Controller/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
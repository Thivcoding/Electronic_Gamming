import React from 'react'
import Navbar from './Components/Header/Navbar'
import BannerSlider from './Components/Main/Home/Benner'
import TopCategory from './Components/Main/TopCategory/TopCategory'
import BestSellers from './Components/Main/BestSellers/BestSellers'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailBestSeller from './Components/Main/BestSellers/DetailBestSeller'
import Cate_Controller from './Components/Main/TopCategory/Cate_Controller'
import DetailController from './Components/Main/TopCategory/DetailOfCategory/DetailController'
import Cate_Mouse from './Components/Main/TopCategory/Cate_Mouse'
import DetailMouse from './Components/Main/TopCategory/DetailOfCategory/DetailMouse'
import Cate_Chairs from './Components/Main/TopCategory/Cate_Chairs'
import Cate_Headsets from './Components/Main/TopCategory/Cate_Headsets'
import Cate_Keyboards from './Components/Main/TopCategory/Cate_Keyboards'
import Cate_Accessories from './Components/Main/TopCategory/Cate_Accessories'
import DetailChairs from './Components/Main/TopCategory/DetailOfCategory/DetailChairs'
import DetailHeadsets from './Components/Main/TopCategory/DetailOfCategory/DetailHeadsets'
import DetailKeyboards from './Components/Main/TopCategory/DetailOfCategory/DetailKeyboards'
import DetailAccessories from './Components/Main/TopCategory/DetailOfCategory/DetailAccessories'



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
              </div>
          }/>
          <Route path='/home' element={
              <div>
                    <BannerSlider/>
                    <TopCategory/>
                    <BestSellers/>
              </div>
          }/>

          {/* route for product in best seller */}
          <Route path='/category/product/:id' element={<DetailBestSeller/>} />

          {/* top category */}
          <Route path='/Controllers' element={<Cate_Controller/>}/>
          <Route path='/mouse' element={<Cate_Mouse/>}/>
          <Route path='/chairs' element={<Cate_Chairs />}/>
          <Route path='/headsets' element={<Cate_Headsets />}/>
          <Route path='/keyboards' element={<Cate_Keyboards />}/>
          <Route path='/accessories' element={<Cate_Accessories />}/>

          {/* detail of Category */}
          <Route path='/Controllers/:id' element={<DetailController/>}/>
          <Route path='/mouse/:id' element={<DetailMouse/>}/>
          <Route path='/chairs/:id' element={<DetailChairs/>}/>
          <Route path='/headsets/:id' element={<DetailHeadsets/>}/>
          <Route path='/keyboards/:id' element={<DetailKeyboards/>}/>
          <Route path='/accessories/:id' element={<DetailAccessories/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
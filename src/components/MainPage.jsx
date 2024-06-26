import React from 'react'
import Navigation from './Navigation'
import ImageSlider from './ImageSlider'
import Categories from './Categories'
import Footer from './Footer'
function MainPage() {
  return (
    <div className='bg-white'>
        <Navigation/>
        <ImageSlider/>
        <Categories/>
        <Footer/>
    </div>
  )
}

export default MainPage

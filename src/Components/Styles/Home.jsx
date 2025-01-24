import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import Maincomponent from '../Maincomponent'
import ArivalProducts from '../ArivalProducts'
import Popular from '../Popular'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Maincomponent/>
      <ArivalProducts Feature='Feature' Product='Products' />
      <ArivalProducts/>
      <Popular popular='Popular' Catogeries='Catogeries'/> 
      <Footer/>
    </>
  )
}

export default Home

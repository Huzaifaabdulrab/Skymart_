import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Maincomponent from './Maincomponent'
import ArivalProducts from './ArivalProducts'
import Popular from './Popular'
import Footer from './Footer'
import Megamarket from './Megamarket'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Maincomponent/>
      <ArivalProducts Feature='New Arrival' Product='Products' />
      <ArivalProducts/>
      <Megamarket Feature='Fashion and Beauty' Product='Mega Market'/>
      <Popular popular='Popular' Catogeries='Catogeries'/> 
      <Footer/>
    </>
  )
}

export default Home

import React, { useEffect } from 'react'
import Header from '../components/repatePages/firstHeader/Header'
import Navbar from '../components/repatePages/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/repatePages/footer/Footer'
import WhatsAppPhone from '../components/repatePages/WhatsAppPhone'

const Main = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div>
      <Header />
      <div className='fixed top-3/4 z-50 w-full'>
        <WhatsAppPhone />
      </div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Main

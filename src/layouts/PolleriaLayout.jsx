import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'

const PolleriaLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default PolleriaLayout

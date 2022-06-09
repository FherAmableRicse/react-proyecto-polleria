import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/sections/Footer'
import Header from '../components/sections/Header'
import Loader from '../components/sections/Loader'
import usePolleria from '../hooks/usePolleria'

const PolleriaLayout = () => {
  const {loading}=usePolleria;

  return (
    <>
      {loading && <Loader/>}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default PolleriaLayout

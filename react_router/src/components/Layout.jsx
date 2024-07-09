import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header/>
        <Home/>
        <Footer/>
    </>
  )
}

export default Layout

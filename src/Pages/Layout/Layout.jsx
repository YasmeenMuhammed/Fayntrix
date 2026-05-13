import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="mt-10 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

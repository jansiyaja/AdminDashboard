import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-orange-50">
            <Header />
            <div className="flex-1 overflow-auto ">
            <Outlet/>
            </div>
            
        </div>
  )
}

export default Layout

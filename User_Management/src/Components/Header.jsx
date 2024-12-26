import React from 'react'
import  logo from '../assets/Logo.svg'

const Header = () => {
  return (
      <div className="flex items-center justify-between  border-b border-gray-300">
       <img src={logo} alt="Logo" className="p-5" />
    </div>
  )
}

export default Header

import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <img className='logo' src={assets.company_logo} alt="" />
            <img className='profile' src={assets.profile_image} alt="" />
        </div>
    </div>
  )
}

export default Navbar
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls the hamburger menu
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.company_logo} alt="Logo" className='logo' /></Link>

      {/* Navbar Links */}
      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""} >home</Link>
        <a href='/#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""} >Discover Dishes</a>
        <a href='/#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >App Download</a>
        <a href='/#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} >Connect with Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {
          !token ? 
          <button onClick={() => setShowLogin(true)}>sign in</button>
          : 
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776;
      </div>
    </div>
  );
}

export default Navbar;

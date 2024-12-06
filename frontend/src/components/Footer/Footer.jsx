import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.footer_logo} alt="" />
                    <p>FoodExpress is committed to delivering fresh, delicious meals right to your doorstep. With a focus on speed, convenience, and quality, we bring you a seamless food ordering experience, whether you're at home, at the office, or on the go.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                     <h2>COMPANY</h2>
                     <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                     </ul>
                </div>
                <div className="footer-content-right">
                     <h2>GET IN TOUCH</h2>
                     <ul>
                        <li>+91-1234567890</li>
                        <li>contact@foodExpress.com</li>
                     </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 @ foodExpress.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
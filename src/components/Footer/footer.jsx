import React from 'react'
import './footer.scss'
import footerlogo from '../../shared/img/footer-logo.png'
import facebook from '../../shared/img/facebook.png'
import twitter from '../../shared/img/twitter.png'
import instagram from '../../shared/img/instagram.png'
import linkedin from '../../shared/img/linkedin.png'
import paypal from '../../shared/img/paypal.png'
import mastercard from '../../shared/img/mastercard.png'
import visa from '../../shared/img/visa.png'



function footer() {
  return (
    <div className='footer'>
        <div>
        <div className="container">
            <div className="follow">
                <img src={footerlogo} alt="Logo" />
                <p>Some food has looked so awful that it's looked like something that the dog's brought home.</p>
                <h1>Fllow Us</h1>
                <div className="media">
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={instagram} alt="Instagram" />
                    <img src={linkedin} alt="Linkedin" />   
                </div>
                </div>

                <div className="pages">
                    <h1>Home</h1>
                    <h1>Product</h1>
                    <h1>Blog</h1>
                    <h1>Pricing</h1>
                    <h1>Testimonials</h1>
                    <h1>Contact Us</h1>
                </div>
                <div className="informs">
                    <h1>Delivery Information</h1>
                    <h1>Privacy Policy</h1>
                    <h1>Terms & Condition</h1>
                    <h1>Search Terms</h1>
                    <h1>Order & Return</h1>
                </div>
                <div className="payment">
                    <h1>Newsletter</h1>
                    <div className="search">
                        <input type="text" placeholder='Your Email' />
                        <button type='button'>Subscribe</button>
                    </div>
                    <div className="payment-choice">
                        <img src={paypal} alt="PayPal" />
                        <img src={mastercard} alt="Master Card" />
                        <img src={visa} alt="Visa" />
                    </div>
                </div>

        </div>
    </div>
                </div>

  )
}

export default footer
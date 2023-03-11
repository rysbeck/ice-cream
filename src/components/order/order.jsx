import React from 'react'
import './order.scss'
import hand from '../../shared/img/hand.png'
import basket from '../../shared/img/basket.png'
import note from '../../shared/img/note.png'
import raspberry from '../../shared/img/raspberry.png'
import googleplay from '../../shared/img/google play.png'
import appstore from '../../shared/img/app store.png'

function order() {
  return (
    <div>
        <div className="order">
            <div className="container">
                <div className="left">
                    <img src={raspberry} alt="" />
                </div>
                <div className="right">
                    <h1>Simple Way To Order Your Food</h1>
                    <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts.</p>
                    <div className="steps">
                        <div className="select">
                            <img src={hand} alt="select" />
                            <p>Select Your Food</p>
                        </div>
                        <div className="add">
                            <img src={basket} alt="cart" />
                            <p>Add To Cart</p>
                        </div>
                        <div className="order">
                            <img src={note} alt="order" />
                            <p>Order Your Food</p>
                        </div>
                    </div>
                    <div className="download">
                        <img src={googleplay} alt="Google Play" />
                        <img src={appstore} alt="App Store" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default order
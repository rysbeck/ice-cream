/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./style.scss"
import brownbread from '../../shared/img/brown-bread.png'
import Cayennechocolate from '../../shared/img/Cayenne-chocolate.png'
import sweetcorn from '../../shared/img/sweet-corn.png'
import girl from '../../shared/img/girl.png'
import guy from '../../shared/img/guy.png'
import guy1 from '../../shared/img/guy1.png'
import guy2 from '../../shared/img/guy2.png'
import cream from '../../shared/img/cream.png'
import lefticon from '../../shared/img/left-icon.png'
import righticon from '../../shared/img/right-icon.png'



function products() {
  return (
    <div className='products'>
        <div className="container">
            <div className="details">
                <div className="top">
                <p>Our Product</p>
                <div className="assets">
                    <a href="">ICE CREAM</a>
                    <a href="">CAYENNE CHOCOLATE</a>
                    <a href="">CAKE BATTER</a>
                    <a href="">CANDY CANE</a>
                    <a href="">PLATTERS</a>
                    <a href="">DESSERT</a>
                </div>
            </div>
            <div className="brown__bread">
                <div className="left">
                    <img src={brownbread} alt="brown-bread" />
                </div>
                <div className="right">
                    <h1>Brown bread</h1>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className="price">
                        <h1>$19.55</h1>
                        <h2>$22.55</h2>
                    </div>
                    <button type='button'>Buy Now</button>
                </div>
            </div>
            <div className="cayennechocolate">
                <div className="left">
                    <img src={Cayennechocolate} alt="brown-bread" />
                </div>
                <div className="right">
                    <h1>Cayenne chocolate</h1>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className="price">
                        <h1>$19.55</h1>
                        <h2>$22.55</h2>
                    </div>
                    <button type='button'>Buy Now</button>
                </div>
            </div>
            <div className="brown__bread">
                <div className="left">
                    <img src={sweetcorn} alt="brown-bread" />
                </div>
                <div className="right">
                    <h1>Sweet corn</h1>
                    <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                    <div className="price">
                        <h1>$19.55</h1>
                        <h2>$22.55</h2>
                    </div>
                    <button type='button'>Buy Now</button>
                </div>
            </div>
            <div className="comment">
                <div className="person">
                    <div className="commenter">
                       <div className="left">
                        <img src={girl} alt="girl" />
                    </div>
                    <div className="right">
                        <h1>Adele A. McNeill</h1>
                        <p>AMERICAN</p>
                    </div> 
                    </div>
                    
                <div className="comm">
                    <p><span>"</span>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.<span>"</span></p>
                </div>
                <div className="people">
                <div className="left-icon">
                    <img src={lefticon} alt="left-icon" />
                </div>
                    <img src={guy} alt="" />
                    <img src={guy1} alt="" />
                    <img src={guy2} alt="" />
                <div className="right-icon">
                    <img src={righticon} alt="right-icon" />    
                </div>    
                </div>
                </div>
<div>
            <img src={cream} alt="" />
            </div>
            </div>
            
            </div>
            
            
        </div>
        
    </div>
  )
}

export default products
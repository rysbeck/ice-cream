import React from 'react'
import "./service.scss"
import car from '../../shared/img/car.svg'
import coffee from '../../shared/img/coffee.svg'
import cash from '../../shared/img/cash.svg'
import delivery from '../../shared/img/delivery.svg'


function Service() {
  return (
    <div className='service'>
        <div className="container1">
            <div className='car'>
                <img src={car} alt="car" />
                <p>Free Shipping</p>
                <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>
            <div className='coffee'>
                <img src={coffee} alt="coffee" />
                <p>Quick Packaging</p>
                <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>
            <div className='cash'>
                <img src={cash} alt="cash" />
                <p>100% Money Back</p>
                <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>
            <div className='delivery'>
                <img src={delivery} alt="delivery" />
                <p>Fast Delivery</p>
                <h4>Last Chance! Free shipping on all orders ends today.</h4>
            </div>
        </div>
    </div>
  )
}

export default Service
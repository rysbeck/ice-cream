import React from 'react'
import './style.scss'
import icecream from '../../shared/img/ice-cream-top.png'
import '../BtnBuy/style.scss'

function part2() {
  return (
    <div className='part2'>
        <div className="container">
            <div className="left">
                <h1>Brown Sugar Oatmea</h1>
                <h5>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</h5>
                <button type='button'>See Details</button>
            </div>
            <div className="right">
                <img src={icecream} alt="" />
            </div>
        </div>
    </div>
  )
}

export default part2
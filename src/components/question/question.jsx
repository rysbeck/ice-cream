import React from 'react'
import './style.scss'

function question() {
  return (
    <div className='question'>
        <div className='haveQ'>Have Question in Mind? Let us help you</div>
        <div className="input">
            <input type="text" placeholder='Enter your question'/>
            <button type='button'>Send</button>    
        </div>
    </div>
  )
}

export default question
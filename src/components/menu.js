'use strict'

import React from 'react'

const Menu = ({getMyLocation, resetMyLocationDetails} = props) => (

    <nav>
      <button 
        id='btnMyLocation' 
        className='btn btn-default'
        onClick={getMyLocation}>My location
      </button>
      <button 
        id='btnResetLocation' 
        className='btn btn-default'
        onClick={resetMyLocationDetails}>Reset my location
      </button>
    </nav>
  
)

export default Menu

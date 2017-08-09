'use strict'

import React from 'react'
import Header from '../components/header.js'
import LocationContainer from '../components/location-container.js'

const App = () => (
  <div className='app-container container-fluid'>
    <Header />
    <main id='mainContent'>
      <LocationContainer />
    </main>
  </div>
)

export default App

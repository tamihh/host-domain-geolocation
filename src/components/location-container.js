import React, { Component } from 'react'
import InputDomain from './input-domain'
import LocationInfo from './location-info'
import Menu from '../components/menu.js'
import Map from '../components/map.js'
import axios from 'axios'

class LocationContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      domainName: '',

      locationInfoData: '',
      websiteCoordinates: [],

      myLocationInfoData: '',
      myCoordinates: [],

      locationCenter: '',

      inputErrorMessage: '',
      showMap: false
    }
  }

  updateInputValue = (event) => {
    this.setState({
      domainName: event.target.value
    })
  }


  validateUrl = (e) => {
    let url = this.state.domainName
    let regexp = /^(http[s]?:\/\/){0,0}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/

    if (!regexp.test(url)) { 
        this.setState({
          inputErrorMessage: 'Please, provide a valid website url (E.g., www.nytimes.com, nytimes.com)'
        })
        return false
    }

    this.getLocation(e)
  }

  getLocation = (e) => {
    let host = ''
    let locationCoordinates = 'myCoordinates'

    if (e.target.id !== 'btnMyLocation') {
      host = this.state.domainName
      locationCoordinates = 'websiteCoordinates'
    }

    axios.get(`http://freegeoip.net/json/${host}`)
      .then(response => {
        this.setState({
          domainName: '',
          inputErrorMessage: '',
          locationInfoData: response.data, 
          [locationCoordinates]: [response.data.latitude, response.data.longitude],
          locationCenter: [response.data.latitude, response.data.longitude]
        })
        this.showMap()
      })  
      .catch(error => {
        console.log(error)
      })
  }
  
  showMap = () => {
    this.setState({
      showMap: true
    })
  }

  renderMap() {

    if (this.state.showMap) {
      return (
        <Map
          myCoordinates={this.state.myCoordinates}
          websiteCoordinates={this.state.websiteCoordinates}
          locationCenter={this.state.locationCenter}
        />
      )
    }
  }

  resetMyLocationDetails = () => {
    this.setState({
      myCoordinates: ''
    })
  }

  render() {
    return (
      <section id='geoLocationContainer'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <InputDomain 
              value={this.state.domainName} 
              updateInputValue={this.updateInputValue}
              errorMessage={this.state.inputErrorMessage}
              validateUrl={this.validateUrl}
            />
          </div>
          <div className='col-xs-6 col-md-6'>
            <Menu 
              getMyLocation={this.getLocation} 
              resetMyLocationDetails={this.resetMyLocationDetails}
            />  
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <LocationInfo 
              locationInfoData={this.state.locationInfoData}
              websiteDomain={this.state.domainName}
            />
          </div>
          <div className='col-xs-12 col-md-6'>
            {this.renderMap()}
          </div>
        </div>
      </section>
    )
  }
}


export default LocationContainer




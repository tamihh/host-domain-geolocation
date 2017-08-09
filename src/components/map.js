import React, { PureComponent } from 'react'

class Map extends PureComponent {

  componentDidMount() {
    this.initMap()
  }

  componentDidUpdate() {
    this.initMap()
  }

  initMap = () => {
    let myCoordinates = this.props.myCoordinates
    let websiteCoordinates = this.props.websiteCoordinates

    let locations = [myCoordinates, websiteCoordinates]
    let locationCenter = this.props.locationCenter

    let map = new google.maps.Map(this.refs.map, {
      zoom: 2,
      center: new google.maps.LatLng(locationCenter[0], locationCenter[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    let infowindow = new google.maps.InfoWindow()

    let marker, i

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        map: map
      })

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i))
    }
  }
  

  render() {
    return (
      <div id="map" ref="map" style={{width:'100%', height: '335px'}}></div>
    )
  }
}

export default Map
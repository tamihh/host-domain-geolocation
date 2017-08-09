'use strict'

import React from 'react'

const LocationInfo = (props) => {
  const { ip, country_name, region_name, city, zip_code, latitude, longitude} = props.locationInfoData
  
	return (
      <div id='locationInfo'>
        <h4>Estimated location</h4>
        <table className='empty table table-striped'>
          <tbody>
            <tr>
              <td className='field_name'>IP</td>
              <td id='location_query' className='location_value'>{ip}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>Country</td>
              <td id='location_country' className='location_value'>{country_name}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>Region</td>
              <td id='location_regionName' className='location_value'>{region_name}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>City</td>
              <td id='location_city' className='location_value'>{city}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>Zip Code</td>
              <td id='location_zip_code' className='location_value'>{zip_code}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>Latitude</td>
              <td id='location_lat' className='location_value'>{latitude}</td>
              <td><button className='help'>?</button></td>
            </tr>
            <tr>
              <td className='field_name'>Longitude</td>
              <td id='location_lon' className='location_value'>{longitude}</td>
              <td><button className='help'>?</button></td>
            </tr>
          </tbody>
        </table>

      </div>
	)
}

export default LocationInfo

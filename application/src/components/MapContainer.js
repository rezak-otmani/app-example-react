import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 
export class MapContainer extends Component {

render() {


    return (
      <Map 
            
          google={this.props.google}
          style={{width: '100vw', height: '100vh', position: 'relative'}}
          initialCenter={{
            lat: 36.73556051,
            lng: 3.95799242
          }}
          zoom={15}
          onClick={this.onMapClicked}
          onDragend={this.centerMoved}


           >

         <Marker
    title={'Stalwart Contractors'}
    position={{lat: 36.73556051, lng: 3.95799242}}
    name={'Stalwart Contractors'}
       />
              
       
       
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)

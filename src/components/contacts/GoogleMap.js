import React, { Component, createRef } from 'react';

export default class GoogleMap extends Component {
  googleMapRef = createRef();
  createGoogleMap = () => {
    this.googleMapInstance = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: { lat: 25.03847, lng: 121.514291 },
    });
  };
  createMarker = () => {
    this.marker = new window.google.maps.Marker({
      position: { lat: 25.03847, lng: 121.514291 },
      map: this.googleMapInstance,
      title: '五倍紅寶石 - 網頁設計教學程式設計教育機構',
    });
  };

  componentDidMount() {
    const googleMapScript = document.createElement('script');

    googleMapScript.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAgRBhZcod7E7S7GvNQxJXoqEfWUKPiu_A&libraries=places';
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      this.createGoogleMap();
      this.createMarker();
    });
  }

  render() {
    return (
      <div id="google-map" ref={this.googleMapRef} style={{ width: '100%', height: '300px' }}></div>
    );
  }
}

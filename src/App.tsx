import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css'
import MapArea from './MapArea';
import PointToHomeBanner from './PointToHomeBanner'
import WelcomeBanner from './WelcomeBanner';
import { LeafletMouseEvent } from 'leaflet';

interface AppState {
  showBanner: boolean;
  isPointingHome: boolean;
  mapCenter: [number, number];
  homeCoordinates: [number, number] | null;
}

class App extends React.Component<{}, AppState> {

  constructor() {
    super({});
    this.state = {
      showBanner: true,
      isPointingHome: false,
      mapCenter: [40.443611, -3.736944], // Dummy location
      homeCoordinates: null,
    }
  }

  requestGeolocation() {
    const success: PositionCallback = (pos) => {
      this.setState({
        mapCenter: [pos.coords.latitude, pos.coords.longitude]
      })
    }
    const error: PositionErrorCallback = (e) => {
      console.error(e)
    }
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 10000,
    })
  }

  markHome() {
    this.setState({
      isPointingHome: !this.state.isPointingHome
    });
  }

  onMapClicked(e: LeafletMouseEvent) {
    if (!this.state.isPointingHome) {
      return
    }
    this.setState({
      isPointingHome: false,
      homeCoordinates: [e.latlng.lat, e.latlng.lng],
    })
  }

  render() {
    return (
      <div id="app">

        <MapArea mapCenter={this.state.mapCenter} homeCoordinates={this.state.homeCoordinates} onClick={this.onMapClicked.bind(this)} />
        <div id="toolbar">
          <button id="geolocate" onClick={() => this.requestGeolocation()} title="Geoubicarme">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M12 18.984q2.906 0 4.945-2.039t2.039-4.945-2.039-4.945-4.945-2.039-4.945 2.039-2.039 4.945 2.039 4.945 4.945 2.039zM20.953 11.016h2.063v1.969h-2.063q-0.328 2.953-2.672 5.297t-5.297 2.672v2.063h-1.969v-2.063q-2.953-0.328-5.297-2.672t-2.672-5.297h-2.063v-1.969h2.063q0.328-2.953 2.672-5.297t5.297-2.672v-2.063h1.969v2.063q2.953 0.328 5.297 2.672t2.672 5.297zM12 8.016q1.641 0 2.813 1.172t1.172 2.813-1.172 2.813-2.813 1.172-2.813-1.172-1.172-2.813 1.172-2.813 2.813-1.172z"></path>
</svg>
          </button>
          <button id="mark-home" className={this.state.isPointingHome ? 'active' : ''} onClick={() => this.markHome()} title="Marcar mi casa">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path d="M12 11.484q1.031 0 1.758-0.727t0.727-1.758-0.727-1.758-1.758-0.727-1.758 0.727-0.727 1.758 0.727 1.758 1.758 0.727zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z"></path>
</svg>
          </button>
        </div>
        <PointToHomeBanner visible={this.state.isPointingHome} />
        {this.state.showBanner ? <WelcomeBanner onDone={() => this.setState({ showBanner: false })} /> : null}
      </div>
    )
  }

}

export default App;

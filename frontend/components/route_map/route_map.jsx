import React from 'react';
import merge from 'lodash/merge';
import { throwStatement } from '@babel/types';
import MarkerManager from '../../util/marker_manager'

class RouteMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: {lat: 40.8, lng: -74},
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        // this.MarkerManager = new MarkerManager(this.map);
    }

    render () {
        return(
            <div id='map-container' ref={ map => this.mapNode = map }/>
        )
    }
}

export default RouteMap
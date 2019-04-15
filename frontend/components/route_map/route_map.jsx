import React from 'react';
import merge from 'lodash/merge';
import { throwStatement } from '@babel/types';
import MarkerManager from '../../util/marker_manager'

class RouteMap extends React.Component {
    componentDidMount() {
        this.props.fetchRoutes()
        const mapOptions = {
            center: {lat: 40.8, lng: -74},
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.routes)
    }

    componentDidUpdate() {
        // this.props.fetchRoutes()
        // this.MarkerManager.updateMarkers(this.props.routes)
    }

    render () {
        return(
            <div id='map-container' ref={ map => this.mapNode = map }/>
        )
    }

}

export default RouteMap
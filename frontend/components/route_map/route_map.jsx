import React from 'react';
import merge from 'lodash/merge';

class RouteMap extends React.Component {
    componentDidMount() {
        mapOptions = {
            center: {lat: 40, lng: -70},
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }
    
    render () {
        return(
            <div id='map-container' ref='map'/>
        )
    }
}
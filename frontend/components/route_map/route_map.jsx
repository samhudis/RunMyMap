import React from 'react';
import merge from 'lodash/merge'
import MarkerManager from '../../util/marker_manager'
import { debug } from 'util';

class RouteMap extends React.Component {
    componentDidMount() {
        let that = this
        this.props.fetchRoutes()
        let pins = [];
        const mapOptions = {
            center: {lat: 40.8, lng: -74},
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
        directionsDisplay.setMap(this.map)
        this.map.addListener('click', function(e) {
            if (pins.length < 1) {
                placeMarkerAndPanTo(e.latLng, this);
                }
            else if (pins.length < 2) {
                placeMarkerAndPanTo(e.latLng, this);
                renderRoute()
                
            }
            });

        function renderRoute() {
            const start = pins[0];
            const end = pins[1];
            let request = {
                origin: start,
                destination: end,
                travelMode: "WALKING"
            };
            directionsService.route(request, function(result, status){
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                    let polyline = result.routes[0].overview_polyline;
                    debugger
                    that.props.sendPolyline(polyline)
                }
            });
        }
        
        function placeMarkerAndPanTo(latLng, map) {
                pins.push(latLng)
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            map.panTo(latLng);
                }
            if (pins.length === 2) {renderRoute()}
        this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.routes)
    }

    componentDidUpdate() {
        console.log("updated!")
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
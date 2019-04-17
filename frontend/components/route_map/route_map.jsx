import React from 'react';
import merge from 'lodash/merge'
import MarkerManager from '../../util/marker_manager'
import { debug } from 'util';

class RouteMap extends React.Component {
    componentDidMount() {
        let that = this
        // this.props.fetchRoutes()
        let pins = [];
        let markers = [];
        this.create = true;
        const mapOptions = {
            center: {lat: 40.8, lng: -74},
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
        directionsDisplay.setMap(this.map)
        this.map.addListener('click', function(e) {
            if (that.create === true) {
            if (pins.length < 1) {
                placeMarkerAndPanTo(e.latLng, this);
                }
            else if (pins.length < 2) {
                placeMarkerAndPanTo(e.latLng, this);
                renderRoute()
                
            }
            }});

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
                    markers[0].setMap(null);
                    markers[1].setMap(null);
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
            markers.push(marker)
            map.panTo(latLng);
                }
            if (pins.length === 2) {renderRoute()}
        this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.routes)
    }

    componentDidUpdate() {
        let that = this
        function renderPolyline(preset_polyline) {
            let path = google.maps.geometry.encoding.decodePath(preset_polyline)
            let polyline = new google.maps.Polyline({path: path})
            polyline.setMap(that.map)
            let bounds = new google.maps.LatLngBounds();
            for (let i=0; i < polyline.getPath().getLength(); i++) {
                bounds.extend(polyline.getPath().getAt(i));
            }
            that.map.fitBounds(bounds);
        }
        if (this.props.preset_polyline) {
            that.create = false;
            renderPolyline(this.props.preset_polyline)
        }
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
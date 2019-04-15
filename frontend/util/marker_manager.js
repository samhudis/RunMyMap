import React from 'react'

class MarkerManager {

    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(routes) {
        const routesObject = {};
        routes.forEach( route => {
            routesObject[route.id] = route
        });
        
        routes.filter(route => !this.markers[route.id]).forEach(newRoute => this.createMarkerFromRoute(newRoute, this.handleClick))

        Object.keys(this.routes)
            .filter(routeId => !routesObject[routeId]).forEach((routeId) => this.removeMarker(this.markers[routeId]))

    }

    createMarkerFromRoute(route) {
        const position = new google.maps.LatLng(40,-70);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            routeId : route.id
        });

        marker.addListener('click', () => this.handleClick(route));
        this.markers[marker.routeId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.routeId].setMap(null)
        delete this.markers[marker.routeId];
    }
}

export default MarkerManager
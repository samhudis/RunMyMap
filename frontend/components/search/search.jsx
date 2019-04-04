import React from 'react';
import merge from 'lodash/merge';
import RouteMap from '../route_map/route_map';
import RouteIndex from '../routes/route_index_container'

class Search extends React.Component {
    render () {
        return(
            <div id='map-container' ref='map'>
            <BenchMap />
            <BenchIndex />
            </div>
        )
    }
}
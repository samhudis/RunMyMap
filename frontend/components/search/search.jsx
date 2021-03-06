import React from 'react';
import merge from 'lodash/merge';
import RouteMap from '../route_map/route_map_container';
import RouteIndex from '../routes/route_index_container'

class Search extends React.Component {
    render () {
        return(
            <div id='map-container' ref='map'>
            <RouteMap />
            <RouteIndex />
            </div>
        )
    }
}

export default Search;
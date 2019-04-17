import React from 'react';
import RouteMap from '../route_map/route_map_container';

class RouteShow extends React.Component {

    constructor(props) {
        super(props)
        // this.routeId = this.props.routeId
    }


    componentDidMount() {
        this.props.fetchRoute(this.props.match.params.routeId)
    }

    render() {
        const route = this.props.route || {id: ""};
        return(
            <div className="route-show">
                { route.name }
                {/* <br />
                { route.polyline } */}
                {/* <RouteMap preset_polyline={this.props.route.polyline}/> */}
                <RouteMap preset_polyline={route.polyline} />
                {/* <RouteMap /> */}
                {/* { route.polyline } */}
            </div>
        )
    }
}


export default RouteShow
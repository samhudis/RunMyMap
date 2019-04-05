import React from 'react';
// import RouteIndexItem from './route_index_item'

class RouteShow extends React.Component {

    constructor(props) {
        debugger
        super(props)
        // this.routeId = this.props.routeId
    }


    componentDidMount() {
        this.props.fetchRoute(this.props.match.params.routeId)
    }

    render() {
        const route = this.props.route || {id: ""}
        debugger
        return(
            <div className="all-routes">
            {/* <img className="invisibile" src='https://mapmy.uastatic.com/36381a39b7d1da558de558e3df24adf2.png'/> */}
            <ul>
                { Object.values(route) }
            </ul>
            </div>
        )
    }
}


export default RouteShow
import React from 'react';
import RouteIndexItem from './route_index_item'

class RouteIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRoutes()
    }

    render() {
        const routes = Object.values(this.props.routes).map(route => 
        <RouteIndexItem route = {route} key={route.id}/>)

        return(
            <div className="all-routes">
            {/* <img className="invisibile" src='https://mapmy.uastatic.com/36381a39b7d1da558de558e3df24adf2.png'/> */}
            <ul>
                { routes }
            </ul>
            </div>
        )
    }
}


export default RouteIndex
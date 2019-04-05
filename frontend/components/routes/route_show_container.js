import routeShow from './route_show';
import { fetchRoute } from '../../actions/route_actions'
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    debugger
    return {route: state.entities.routes[ownProps.match.params.routeId]}
}

const mdp = dispatch => ({
    fetchRoute: (route) => dispatch(fetchRoute(route))
})

export default connect(msp,mdp)(routeShow)
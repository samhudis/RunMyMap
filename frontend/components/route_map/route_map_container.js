import routeMap from './route_map';
import { fetchRoutes, sendPolyline } from '../../actions/route_actions'
import { connect } from 'react-redux';

const msp = state => {
    return {routes: state.entities.routes}
}

const mdp = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    sendPolyline: polyline => dispatch(sendPolyline(polyline))
})

export default connect(msp,mdp)(routeMap)
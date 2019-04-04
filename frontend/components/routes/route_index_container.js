import routesIndex from './route_index';
import { fetchRoutes } from '../../actions/route_actions'
import { connect } from 'react-redux';

const msp = state => {
    return {routes: state.entities.routes}
}

const mdp = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes())
})

export default connect(msp,mdp)(routesIndex)
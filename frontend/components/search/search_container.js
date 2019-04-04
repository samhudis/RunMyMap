import search from './search';
import { fetchRoutes } from '../../actions/route_actions'
import { connect } from 'react-redux';

const msp = state => {
    return {routes: state.entities.routes}
}

const mdp = dispatch => ({
    fetchRoutes: () => dispatch(fetchRoutes())
})

export default connect(msp,mdp)(search)
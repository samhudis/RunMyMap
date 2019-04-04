import { connect } from 'react-redux';

import RoutesBackground from './routes_background';

const msp = (state) => {
    return state
};

const mdp = dispatch => ({});

export default connect(msp,mdp)(RoutesBackground);
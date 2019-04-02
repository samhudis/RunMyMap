import { connect } from 'react-redux';

import Background from './background';

const msp = (state) => {
    return state
};

const mdp = dispatch => ({});

export default connect(msp, mdp)(Background);
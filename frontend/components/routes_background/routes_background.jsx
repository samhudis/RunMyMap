import React from 'react';
import { Link } from 'react-router-dom';

const routesBackground = () => {
    return(
        <>
        <div className = "bkgnd">
            <img src='https://mapmy.uastatic.com/b87d63c5b366cbccce84c1e6e66d70da.png' />
            <img src='https://mapmy.uastatic.com/36381a39b7d1da558de558e3df24adf2.png' />
        </div>
        <div className="routes-links">
        <Link to="/routes/create" className="routes-page-link routes-create-link">Create Route</Link>
        <Link to="/routes/index" className="routes-page-link routes-index-link">All Routes</Link>
        </div>            
        </>
    )
}

export default routesBackground;
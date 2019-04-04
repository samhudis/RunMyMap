import React from 'react';
import { Link } from 'react-router-dom';

const RouteIndexItem = ({route}) => {
    return (
        <li>
            <Link to={`/routes/${route.id}`}> {route.name} </Link>
        </li>);
    };

export default RouteIndexItem;
import React from 'react';

const RouteIndexItem = ({route}) => {
    return (
        <li>
            {route.name}
            {route.user_id}
        </li>);
    };

export default RouteIndexItem;
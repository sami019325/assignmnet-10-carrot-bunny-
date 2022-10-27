import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// import { history } from '_helpers';
import { useContext } from 'react';
import { SharedContext } from './User/ShareData';

const PrivateRoute = ({ children }) => {
    // const auth = useContext(SharedContext)
    // const location = useLocation()

    // let from = location?.state?.from?.pathname || '/'
    const { DisplayUser } = useContext(SharedContext)
    if (!DisplayUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/" />
    }

    // authorized so return child components
    return children;
};

export default PrivateRoute;
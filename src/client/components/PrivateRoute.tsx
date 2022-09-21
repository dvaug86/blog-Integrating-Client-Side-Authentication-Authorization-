import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { TOKEN_KEY } from '../services/api-service';



export const PrivateRoute = (props: PrivateRouteProps) => {

    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if (!TOKEN) {
            return <Navigate to='/login' />
   
    } 
    return props.children;
}

interface PrivateRouteProps { 
    path?: string;
    exact?: boolean;
    children: React.ReactElement;
}

export default PrivateRoute;
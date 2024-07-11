import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectRoutes = ({children, user, redirect = "/login"}) => {

    if(!user)
    {
        return <Navigate to={redirect} replace />
    }
    return children ? children : <Outlet/>;

}

export default ProtectRoutes

import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    //Global flag
    let auth = JSON.parse(sessionStorage.getItem('isLogged')) 

    return(
        auth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes

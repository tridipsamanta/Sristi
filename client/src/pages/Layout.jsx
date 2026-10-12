import React from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/LOading'

export function AuthLayout(){
    const {user , loadingUser} = userAppContext()

    if(loadingUser) return <Loading/>
    if(!user) return <Navigate to="/login" replace/>
    return <Outlet/>
}

export function GuestLayout(){
    const {user , loadingUser} = userAppContext()

    if(loadingUser) return <Loading/>
    if(!user) return <Navigate to="/" replace/>
    return <Outlet/>
}
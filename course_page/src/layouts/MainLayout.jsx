import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import LoginModel from '../components/LoginModel'
import { PageProvider } from '../hooks/usePage'

export default function MainLayout() {



    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <LoginModel />
        </>

    )
}

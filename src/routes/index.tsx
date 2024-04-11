import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'layout'

//routes
import { authProtectedRoutes } from './all-routes'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { UserProvider } from 'context/user'

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route path={route.path} element={<Layout isLight={false}>{route.component}</Layout>} key={idx} />
                    ))}
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default Index

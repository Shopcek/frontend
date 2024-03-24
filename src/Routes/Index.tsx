import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from 'Layout'

//routes
import { authProtectedRoutes } from './allRoutes'

import { CartContextProvider } from 'new-context/cart'

import { TestComponent } from 'new-context/cart'

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route path={route.path} element={<Layout isLight={false}>{route.component}</Layout>} key={idx} />
                    ))}
                </Route>
                <Route>
                    <Route path="/test" element={<CartContextProvider><TestComponent /></CartContextProvider>} /> 
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default Index

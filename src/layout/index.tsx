import React from 'react'
import { Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Footer } from './footer/newfooter'
import Header from './header'
import { MainModal } from 'components/modals'
import Collections from './collections'

import { CollectionsProvider, useCollections } from 'context/collections'

const Layout = (props: any) => {
    let location = useLocation()

    window.onscroll = function () {
        scrollFunction()
    }

    const scrollFunction = () => {
        const element = document.getElementById('back-to-top')
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        }
    }
    const ScrollbarTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <React.Fragment>
            {location.pathname && <MainModal location={location.pathname} />}
            <div className="layout">
                <CollectionsProvider>
                    <Collections></Collections>
                    <div className="page">
                        <Header />
                        {props.children}
                        <Footer />
                    </div>
                </CollectionsProvider>
            </div>
        </React.Fragment>
    )
}

export default Layout

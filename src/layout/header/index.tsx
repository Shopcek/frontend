import React, { useState } from 'react'
import { Container, Navbar, Nav, Form } from 'react-bootstrap'

import { CardModal } from 'components/modals/cart'

import { useUser } from 'context/user'

import { Logo } from './logo'
import { Pages } from './pages'

import { WishList } from './buttons/wishlist'
import { Cart } from './buttons/cart'
import { Account, SignInUp } from './buttons/account'
import { Collections } from './buttons/collections'

import { Delivery } from './icons/delivery'

import { UserProvider } from 'context/user'

import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props: any) => {
    function Component() {
        const navigate = useNavigate()
        const { status } = useUser()

        const [card, setCard] = useState(false)
        const [_, forceUpdate] = useReducer((x) => x + 1, 0)
        const handlecardClose = () => {
            setCard(false)
            navigate(window.location.pathname)
        }
        const handlecardShow = () => setCard(true)

        return (
            <React.Fragment>
                <Navbar className="navbar-expand-lg ecommerce-navbar" id="navbar" expanded={false}>
                    <Container>
                        <Logo />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                                <Form.Control className="search-bar" size="lg" type="text" placeholder="Search for product" />
                            </Nav>
                        </Navbar.Collapse>

                        <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
                        <div className="d-flex align-items-center">
                            {status === 'connected' ? [<Account />, <WishList />] : <SignInUp />}
                            <Cart handlecardShow={handlecardShow} />
                        </div>
                    </Container>
                </Navbar>
                <CardModal show={card} handleClose={handlecardClose} />

                <Navbar className="navbar-expand-lg ecommerce-navbar bottom-navbar" id="navbar" expanded={false}>
                    <Container className="navbar-nav">
                        <Collections />
                        <Pages />
                        <Delivery />
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }

    return (
        <UserProvider>
            <Component />
        </UserProvider>
    )
}

export default Header

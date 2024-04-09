import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Form } from 'react-bootstrap'

import { SearchModal, CollectionModal, CardModal } from 'components/modals'
import { useUser } from 'context/user'

import { Logo } from './logo'
import { Pages } from './pages'

import { WishList } from './buttons/wishlist'
import { Cart } from './buttons/cart'
import { Account, SignInUp } from './buttons/account'
import { Collections } from './buttons/collections'

import { Delivery } from './icons/delivery'

import { UserProvider } from 'context/user'

import { useNavigate } from 'react-router-dom'
import { useCollections } from 'context/collections'

const Header = (props: any) => {
    function Component() {
        const navigate = useNavigate()
        const { status } = useUser()

        const [card, setCard] = useState(false)
        const handlecardClose = () => {
            setCard(false)
        }
        const handlecardShow = () => setCard(true)

        const {collectionsShow, handleCollectionsClose, handleCollectionsShow} = useCollections()

        useEffect(()=>{

        console.log(collectionsShow)

        }, [collectionsShow])


        const [search, setSearch] = useState(false)
        const handleSearchClose = () => {
            setSearch(false)
        }
        const handleSearchShow = () => setSearch(true)

        const [page, setPage] = useState<any>()
        useEffect(()=>{
            const paths = window.location.pathname.split('/')
    
            setPage(paths[1])
        }, [window.location.pathname])
    
    

        return (
            <React.Fragment>
                <Navbar className="navbar-expand-lg ecommerce-navbar top-navbar" id="navbar" expanded={false}>
                    <Container>
                        <Logo />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                                <SearchModal show={search} handleClose={handleSearchClose} handleShow={handleSearchShow} />
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
                <CollectionModal show={collectionsShow} handleClose={handleCollectionsClose} />
                

                <Navbar className={`navbar-expand-lg ecommerce-navbar bottom-navbar ${page}`} id="navbar" expanded={false}>
                    <Container className="navbar-nav">
                        <Collections onClick={handleCollectionsShow} />
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

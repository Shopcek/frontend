import React, {  useState } from 'react'
import { Container, Navbar, Nav, Form } from 'react-bootstrap'

import { AccountModal } from 'Components/MainModal/AccountModal'
import { CardModal } from 'Components/MainModal'
import { withTranslation } from 'react-i18next'
import withRouter from 'Components/withRouter'

import { useUser } from 'context/user'

import { Logo } from './logo'
import { Pages } from './pages'

import { WishList } from './buttons/wishlist'
import { Cart } from './buttons/cart'
import { Account, SignInUp} from './buttons/account'
import { Collections } from './buttons/collections'

import { Delivery } from './icons/delivery'



const Header = (props: any) => {
    let { jwt } = useUser()

    const [card, setCard] = useState(false)

    const handlecardClose = () => setCard(false)
    const handlecardShow = () => setCard(true)

    //account modal
    const [account, setAccount] = useState(false)
    const handleAccountClose = () => setAccount(false)
    const handleAccountShow = () => setAccount(true)

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
                        {jwt ? [<Account />, <WishList />] : <SignInUp handlecardShow={handleAccountShow} />}
                        <Cart handlecardShow={handlecardShow} />
                    </div>
                </Container>
            </Navbar>
            <CardModal show={card} handleClose={handlecardClose} />
            <AccountModal show={account} setShow={setAccount} handleClose={handleAccountClose}></AccountModal>

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

export default withRouter(withTranslation()(Header))
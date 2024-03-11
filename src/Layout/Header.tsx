import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Button, Image, Navbar, Nav, Form } from 'react-bootstrap'

import { AccountModal } from 'Components/Modals/AccountModal'
import { CardModal } from 'Components/MainModal'
import { withTranslation } from 'react-i18next'
import withRouter from 'Components/withRouter'

import { useCart } from 'context/cart-context'
import { useUser } from 'context/user-context'

import { Text } from 'Components/Images/Logo'

import { Wishlist, User, Cart, Delivery, Collections } from 'Components/Images/Icons'

function ShoppingIcon(props: { handlecardShow: any }) {
    let { cartItems } = useCart()
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setCartCount(cartItems.length)

        let subtotal = 0
        for (let i = 0; i < cartItems.length; i++) {
            subtotal += cartItems[i].product.price * cartItems[i].count
        }
        setTotalPrice(subtotal)
    }, [cartItems])

    return (
        <div
            className="topbar-head-dropdown ms-1 header-item"
            style={{
                cursor: 'pointer'
            }}
            onClick={props.handlecardShow}
        >
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
            >
                {/* <i className="ph-shopping-cart fs-18"></i> */}
                <Cart className="rounded-circle header-profile-user" />
                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">
                    {cartCount}
                </span>
            </Button>
            <h5
                className="text-secondary"
                style={{
                    paddingLeft: '15px',
                    marginBottom: '0px'
                }}
            >
                ${totalPrice}
            </h5>
        </div>
    )
}

function WishListIcon(props: { handlecardShow: any }) {
    return (
        <div className="topbar-head-dropdown ms-1 header-item">
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
                onClick={props.handlecardShow}
            >
                <Wishlist className="rounded-circle header-profile-user" />
                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">0</span>
            </Button>
        </div>
    )
}

function Account() {
    let { jwt } = useUser()

    return (
        <div className="dropdown header-item dropdown-hover-end">
            <Dropdown>
                <Dropdown.Toggle id="page-header-user-dropdown" bsPrefix="btn" className="btn btn-icon btn-topbar btn-link rounded-circle" as="a">
                    <User className="rounded-circle header-profile-user" />
                </Dropdown.Toggle>

                {jwt ? (
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link to="/shop/orders">
                                <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Track Orders</span>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/account">
                                <span className="badge bg-success-subtle text-success mt-1 float-end">New</span>
                                <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{' '}
                                <span className="align-middle">Settings</span>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/logout">
                                <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
                                <span className="align-middle" data-key="t-logout">
                                    Logout
                                </span>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                ) : (
                    <Dropdown.Menu>
                        <Dropdown.Item href="/signin">
                            <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
                            <span className="align-middle" data-key="t-logout">
                                Sign In
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item href="/signup">
                            <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
                            <span className="align-middle" data-key="t-logout">
                                Sign Up
                            </span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown>
        </div>
    )
}

function WorldWideShipping() {
    return (
        <div className="d-flex align-items-center nav-item" style={{ fontSize: '14px', textAlign: 'right' }}>
            <div>
                <h6
                    className="text-secondary"
                    // style={{
                    //     marginBottom: '0px'
                    // }}
                >
                    <span>WORLDWIDE</span>
                </h6>
                <p
                // style={{
                //     marginBottom: '0px'
                // }}
                >
                    <h6
                    // style={{
                    //     marginBottom: '0px'
                    // }}
                    >
                        {/* {' '} */}
                        <span className="text-primary">FREE SHIPPING</span>
                    </h6>
                </p>
            </div>
            <Delivery
                // style={{
                //     paddingLeft: '10px'
                // }}
                className="header-profile-user"
            />
        </div>
    )
}

function CollectionsIcon() {
    return (
        <div className="collections">
            <Collections
                className="header-profile-user collections"
                // style={{
                //     width: '25px',
                //     height: 'auto'
                // }}
            />
            <div
            // style={{
            //     paddingTop: '10px'
            // }}
            >
                <h6 className="text-primary">
                    <span
                        className="text-primary"
                        // style={{
                        //     marginBottom: '0px',
                        //     fontSize: '14px',
                        //     bottom: '22px'
                        // }}
                    >
                        COLLECTIONS
                    </span>
                </h6>
            </div>
        </div>
    )
}

function Pages(props: { categories: any; menuShow: any; showMenu: any; t: any }) {
    return (
        <div className="pages">
            {props.categories.map((item: any) => {
                if (item.subPages.length > 0) {
                    return (
                        <div className="dropdown nav-item dropdown-hover" key={item.page.url}>
                            <Link
                                className="dropdown-toggle nav-link "
                                data-key="t-home"
                                to={item.page.url}
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={(e) => {
                                    e.preventDefault()
                                    props.menuShow(item.page.title)
                                }}
                                style={{
                                    fontSize: '14px'
                                }}
                            >
                                {/* <Image src={config.serverUrl + item.page.icon.url} className="page-icons"></Image> */}
                                {(item.page.title as string).toUpperCase()}
                            </Link>
                            <ul
                                className={
                                    props.showMenu === item.page.name
                                        ? 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu show'
                                        : 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu'
                                }
                            >
                                {item.subPages.map((sub: any) => {
                                    return (
                                        <li className="nav-item" key={sub.url}>
                                            <Link to={sub.url} className="nav-link" data-key={sub.url}>
                                                {props.t(sub.title)}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                } else {
                    return (
                        <div className="nav-item">
                            <Link
                                className={`nav-link ${item.page.title === 'Earn' ? 'earn' : ''}`}
                                to={item.page.url}
                                role="button"
                                style={{
                                    fontSize: '14px'
                                }}
                                // onClick={(e) => {
                                //     e.preventDefault()
                                //     props.menuShow(item.page.title)
                                // }}
                            >
                                {/* <Image src={config.serverUrl + item.page.icon.url} className="page-icons"></Image> */}
                                {(item.page.title as string).toUpperCase()}
                            </Link>
                        </div>
                    )
                }
            })}
        </div>
    )
}

function Logo() {
    return (
        <Navbar.Brand className="d-none d-lg-block">
            <Link to="/">
                <div className="logo-dark">
                    <Text height="60" />
                </div>
                <div className="logo-light">
                    <Text height="60" />
                </div>
            </Link>
        </Navbar.Brand>
    )
}

function MoreButton(props: { handleShowColl: any }) {
    return (
        <Button className="btn btn-soft-primary btn-icon d-lg-none collapsed" aria-controls="navbarSupportedContent" onClick={props.handleShowColl}>
            <i className="bi bi-list fs-20"></i>
        </Button>
    )
}

function SideLogo(props: { logo: any }) {
    return (
        <li className="nav-item d-block d-lg-none">
            <Link to="/" className="d-block p-3 h-auto text-center">
                <Image src={props.logo.text.url} alt="" height="25" className="card-logo-dark mx-auto" />
            </Link>
            <Link to="/" className="d-block p-3 h-auto text-center">
                <Image src={props.logo.text.url} alt="" height="25" className="card-logo-light mx-auto" />
            </Link>
        </li>
    )
}

function SignInUp(props: { handlecardShow: any }) {
    return (
        <div className="topbar-head-dropdown ms-1 header-item">
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
                onClick={props.handlecardShow}
            >
                <User className="rounded-circle header-profile-user" />
            </Button>
        </div>
    )
}

const Header = (props: any) => {
    let { jwt } = useUser()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //card modal
    const [card, setCard] = useState(false)

    const handlecardClose = () => setCard(false)
    const handlecardShow = () => setCard(true)

    //account modal
    const [account, setAccount] = useState(false)
    const handleAccountClose = () => setAccount(false)
    const handleAccountShow = () => setAccount(true)

    const [showMenu, setShowMenu] = useState<any>('')
    const menuShow = (item: any) => {
        var windowSize = document.documentElement.clientWidth
        if (windowSize < 992 && showMenu !== item) {
            setShowMenu(item)
        } else {
            setShowMenu('')
        }
    }

    const path = props.router.location.pathname
    useEffect(() => {
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + path
            const ul = document.getElementById('navigation-menu') as HTMLElement
            const items: any = ul.getElementsByTagName('a')
            let itemsArray: any = Array.from(items)
            removeActivation(itemsArray)
            let matchingMenuItem = itemsArray.find((x: HTMLAnchorElement) => x.pathname === pathName)
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }

        const removeActivation = (items: HTMLAnchorElement[]) => {
            items.forEach((item: HTMLAnchorElement) => {
                item.classList.remove('active')
            })
        }

        const activateParentDropdown = (item: HTMLAnchorElement) => {
            item.classList.add('active')
            let parentDrop: any = item.closest('.dropdown')
            if (parentDrop) {
                parentDrop.classList.add('active')
                parentDrop.querySelector('.dropdown-toggle').classList.add('active')
                let parentDropdown = parentDrop.parentElement.closest('.dropdown')

                if (parentDropdown) {
                    parentDropdown.querySelector('.dropdown-toggle').classList.add('active')
                    let parentEleDropdown = parentDropdown.parentElement.closest('.dropdown')
                    if (parentEleDropdown) {
                        parentEleDropdown.querySelector('.dropdown-toggle').classList.add('active')
                    }
                }
            }
        }

        initMenu()
        let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
        if (collapse && collapse.classList.contains('show')) {
            collapse.classList.remove('show')
        }
    }, [path])

    const windowScroll = () => {
        let navbar = document.getElementById('navbar')
        if (navbar) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                navbar.classList.add('is-sticky')
            } else {
                navbar.classList.remove('is-sticky')
            }
        }
    }
    window.addEventListener('scroll', function (ev) {
        ev.preventDefault()
        windowScroll()
    })

    const handleShowColl = () => {
        let navbar = document.getElementById('navbar')
        let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
        navbar && navbar.classList.remove('navbar-expand')
        if (collapse && collapse.classList.contains('show')) {
            collapse.addEventListener('shown.bs.collapse', (event) => {
                collapse.classList.remove('show')
            })
        } else {
            collapse.classList.add('show')
        }
    }

    const windowResizeHover = () => {
        var windowSize = document.documentElement.clientWidth
        if (windowSize > 992) {
            let collapse = document.getElementById('navbarSupportedContent') as HTMLElement
            if (collapse && collapse.classList.contains('show')) {
                collapse.classList.remove('show')
            }
            setShowMenu('')
        }
    }

    useEffect(() => {
        window.addEventListener('resize', windowResizeHover)
        return () => {
            window.removeEventListener('resize', windowResizeHover)
        }
    }, [])

    return (
        <React.Fragment>
            <Navbar className="navbar-expand-lg ecommerce-navbar" id="navbar" expanded={false}>
                <Container>
                    <Logo />
                    <MoreButton handleShowColl={handleShowColl} />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                            {/* <SideLogo logo={logo} /> */}
                            <Form.Control className="search-bar" size="lg" type="text" onClick={handleShow} placeholder="Search for product" />
                            {/* <SearchModal show={show} handleClose={handleClose} /> */}
                        </Nav>
                    </Navbar.Collapse>

                    <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
                    <div className="d-flex align-items-center">
                        {jwt ? <Account></Account> : <SignInUp handlecardShow={handleAccountShow}></SignInUp>}
                        <ShoppingIcon handlecardShow={handlecardShow} />
                    </div>
                </Container>
            </Navbar>
            <CardModal show={card} handleClose={handlecardClose} />
            <AccountModal show={account} setShow={setAccount} handleClose={handleAccountClose}></AccountModal>

            <Navbar className="navbar-expand-lg ecommerce-navbar bottom-navbar" id="navbar" expanded={false}>
                <Container className="navbar-nav">
                    <CollectionsIcon />

                    {/* <Pages categories={categories} menuShow={menuShow} showMenu={showMenu} t={props.t} /> */}

                    <WorldWideShipping />
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default withRouter(withTranslation()(Header))

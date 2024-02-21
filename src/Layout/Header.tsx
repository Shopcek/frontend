import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Button, Row, Col, Card, Image, Navbar, Nav } from 'react-bootstrap'

//img
import avtar1 from 'assets/images/users/avatar-1.jpg'

import { CardModal, SearchModal } from 'Components/MainModal'
import { withTranslation } from 'react-i18next'
import withRouter from 'Components/withRouter'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

const query = gql`
    query {
        parentCategories {
            attributes {
                name
                slug
                childs {
                    data {
                        attributes {
                            name
                            slug
                        }
                    }
                }
            }
        }
        logo {
            data {
                attributes {
                    text {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
        profilePicture {
            url
        }
    }
`

const Header = (props: any) => {
    let jwt = localStorage.getItem('jwt')

    let { data, loading, error } = useQuery(query)
    let logodark = !loading ? config.serverUrl + data.logo.text.url : ''
    let logolight = !loading ? config.serverUrl + data.logo.text.url : ''

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //card modal
    const [card, setCard] = useState(false)

    const handlecardClose = () => setCard(false)
    const handlecardShow = () => setCard(true)

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
                    console.log('parentEleDropdown', parentEleDropdown)
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

    // Resize Nav Collapse
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
                    <Navbar.Brand href="/" className="d-none d-lg-block">
                        <div className="logo-dark">
                            <Image src={logodark} alt="" height="50" />
                        </div>
                        <div className="logo-light">
                            <Image src={logolight} alt="" height="50" />
                        </div>
                    </Navbar.Brand>
                    <Button
                        className="btn btn-soft-primary btn-icon d-lg-none collapsed"
                        aria-controls="navbarSupportedContent"
                        onClick={handleShowColl}
                    >
                        <i className="bi bi-list fs-20"></i>
                    </Button>

                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="mx-lg-auto mb-2 mb-lg-0" id="navigation-menu">
                            {/* LOGO */}
                            <li className="nav-item d-block d-lg-none">
                                <Link to="/#" className="d-block p-3 h-auto text-center">
                                    <Image src={logodark} alt="" height="25" className="card-logo-dark mx-auto" />
                                </Link>
                                <Link to="/#" className="d-block p-3 h-auto text-center">
                                    <Image src={logolight} alt="" height="25" className="card-logo-light mx-auto" />
                                </Link>
                            </li>
                            {(!loading ? data.parentCategories : []).map((item: any) => {
                                return (
                                    <li className="dropdown nav-item dropdown-hover" key={item.slug}>
                                        <Link
                                            className="dropdown-toggle nav-link"
                                            data-key="t-home"
                                            to="/#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                menuShow(item.name)
                                            }}
                                        >
                                            {props.t(item.name)}
                                        </Link>

                                        <ul
                                            className={
                                                showMenu === item.name
                                                    ? 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu show'
                                                    : 'dropdown-menu dropdown-menu-md dropdown-menu-center dropdown-menu-list submenu'
                                            }
                                        >
                                            {item.childs.map((child: any) => {
                                                return (
                                                    <li className="nav-item" key={`${item.slug}-${child.slug}`}>
                                                        <Link to={`/category/${item.slug}/${child.slug}`} className="nav-link" data-key={child.slug}>
                                                            {props.t(child.name)}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>

                    <div className="bg-overlay navbar-overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent.show"></div>
                    <div className="d-flex align-items-center">
                        <Button
                            type="button"
                            className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                            data-bs-toggle="modal"
                            data-bs-target="#searchModal"
                            onClick={handleShow}
                        >
                            <i className="bx bx-search fs-22"></i>
                        </Button>
                        <SearchModal show={show} handleClose={handleClose} />
                        <div className="topbar-head-dropdown ms-1 header-item">
                            <Button
                                type="button"
                                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#ecommerceCart"
                                aria-controls="ecommerceCart"
                                onClick={handlecardShow}
                            >
                                <i className="ph-shopping-cart fs-18"></i>
                                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-danger">
                                    4
                                </span>
                            </Button>
                        </div>
                        {/* <CardModal show={card} handleClose={handlecardClose} /> */}

                        <Dropdown className="topbar-head-dropdown ms-2 header-item dropdown-hover-end" align="start">
                            <Dropdown.Toggle className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted" bsPrefix="btn">
                                <i className="bi bi-sun align-middle fs-20"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu p-2 dropdown-menu-end" id="light-dark-mode">
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood('light')}>
                                    <i className="bi bi-sun align-middle me-2"></i> Default (light mode)
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="dark" onClick={() => props.handleMood('dark')}>
                                    <i className="bi bi-moon align-middle me-2"></i> Dark
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="light" onClick={() => props.handleMood('light')}>
                                    <i className="bi bi-moon-stars align-middle me-2"></i> Auto (system default)
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        {!!jwt ? (
                            <div className="dropdown header-item dropdown-hover-end">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="page-header-user-dropdown"
                                        bsPrefix="btn"
                                        className="btn btn-icon btn-topbar btn-link rounded-circle"
                                        as="a"
                                    >
                                        <Image
                                            className="rounded-circle header-profile-user"
                                            src={config.serverUrl + data?.profilePicture?.url}
                                            alt="Header Avatar"
                                        />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/shop/order">
                                            <i className="bi bi-truck text-muted fs-16 align-middle me-1"></i>{' '}
                                            <span className="align-middle">Track Orders</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/account">
                                            <span className="badge bg-success-subtle text-success mt-1 float-end">New</span>
                                            <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{' '}
                                            <span className="align-middle">Settings</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/logout">
                                            <i className="bi bi-box-arrow-right text-muted fs-16 align-middle me-1"></i>{' '}
                                            <span className="align-middle" data-key="t-logout">
                                                Logout
                                            </span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </Container>
            </Navbar>
            <CardModal show={card} handleClose={handlecardClose} />
        </React.Fragment>
    )
}

export default withRouter(withTranslation()(Header))

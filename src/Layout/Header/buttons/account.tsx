import { useNavigate } from 'react-router-dom'

import { Dropdown, Form, Button } from 'react-bootstrap'

import { User } from 'Components/Images/Icons'
import { useUser } from 'context/user'

import { useConnectModal } from '@rainbow-me/rainbowkit'

export function Account() {
    let navigate = useNavigate()
    let { address, me } = useUser()

    return (
        <div className="dropdown header-item dropdown-hover-end">
            <Dropdown>
                <Dropdown.Toggle id="page-header-user-dropdown" bsPrefix="btn" className="btn btn-icon btn-topbar btn-link rounded-circle" as="a">
                    <User className="rounded-circle header-profile-user" />
                </Dropdown.Toggle>

                <Dropdown.Menu id="page-header-user-dropdown-menu">
                    <Dropdown.Item>
                        <div className="user">
                            <User className="rounded-circle header-profile-user" />
                            <div className="user-info">
                                <span>
                                    {address.slice(0, 6)}...{address.slice(address.length - 3, address.length)}
                                </span>
                                <span>
                                    {address.slice(0, 6)}...{address.slice(address.length - 3, address.length)}
                                </span>
                            </div>
                        </div>
                    </Dropdown.Item>

                    <div className="dropdown-divider"></div>
                    <Dropdown.Item
                        onClick={() => {
                            navigate('/account')
                        }}
                    >
                        <span className="align-middle">My Account</span>
                    </Dropdown.Item>

                    <Dropdown.Item
                        onClick={() => {
                            navigate('/account/order')
                        }}
                    >
                        <span className="align-middle">Orders</span>
                    </Dropdown.Item>

                    <Dropdown.Item
                        onClick={() => {
                            navigate('/account/list')
                        }}
                    >
                        <span className="align-middle">Wishlist</span>
                    </Dropdown.Item>

                    <div className="dropdown-divider"></div>

                    <Dropdown.Item
                        onClick={() => {
                            navigate('/account/xp-points')
                        }}
                    >
                        <div className="xp-points">
                            <span className="align-middle">XP Points</span>
                            1.000.000
                        </div>
                    </Dropdown.Item>

                    <div className="dropdown-divider"></div>
                    <div className="theme">
                        <span className="align-middle" data-key="t-logout">
                            Dark Theme
                        </span>
                        <Form.Check type="switch" />
                    </div>
                    <Dropdown.Item
                        onClick={() => {
                            navigate('/logout')
                        }}
                    >
                        <span className="align-middle" data-key="t-logout">
                            Logout
                        </span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export function SignInUp() {
    let {openConnectModal} = useConnectModal()

    return (
        <div className="topbar-head-dropdown ms-1 header-item">
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
                onClick={openConnectModal}
            >
                <User className="rounded-circle header-profile-user" />
            </Button>
        </div>
    )
}

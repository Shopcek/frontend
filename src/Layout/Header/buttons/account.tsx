import { useNavigate } from 'react-router-dom'

import { Dropdown, Form, Button } from 'react-bootstrap'

import { User } from 'components/images/Icons'
import { useUser, UserProvider } from 'context/user'
import { useEarn, EarnProvider } from 'context/earn'

import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useEffect, useState } from 'react'
import { useRefetch } from 'context/refetch'

export function Account() {
    function Component() {
        const { address, disconnect } = useUser()
        const { xpGQL, choosenGQL } = useEarn()
        const { xp: xpRefetch, choosen } = useRefetch()
        const navigate = useNavigate()

        //@ts-ignore
        const sliced = `${address.slice(0, 6)}...${address.slice(address.length - 6, address.length)}`

        useEffect(() => {
            xpGQL.fn()
        }, [xpRefetch.refetched])

        const [xp, setXp] = useState<any>()
        useEffect(() => {
            switch (xpGQL.status) {
                case 'success': {
                    setXp(
                        <Dropdown.Item
                            onClick={() => {
                                navigate('/account/xp-points')
                            }}
                        >
                            <div className="xp-points">
                                <span className="align-middle">XP Points</span>
                                {xpGQL.data}
                            </div>
                        </Dropdown.Item>
                    )
                }
            }
        }, [xpGQL.status, xpRefetch.refetched])

        const [username, setUsername] = useState<any>()

        useEffect(() => {
            choosenGQL.fn()
        
        }, [choosen.refetched])
        useEffect(() => {
            switch (choosenGQL.status) {
                case 'success': {
                    setUsername(choosenGQL.data.username)
                }
            }
        }, [choosenGQL.status, choosen.refetched])

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
                                    <span>{username}</span>
                                    <span>{sliced}</span>
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
                                navigate('/account/wishlist')
                            }}
                        >
                            <span className="align-middle">Wishlist</span>
                        </Dropdown.Item>

                        <div className="dropdown-divider"></div>

                        {xp}

                        <div className="dropdown-divider"></div>
                        <div className="theme">
                            <span className="align-middle" data-key="t-logout">
                                Dark Theme
                            </span>
                            <Form.Check type="switch" />
                        </div>
                        <Dropdown.Item
                            onClick={() => {
                                disconnect!()
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

    return (
        <EarnProvider>
            <Component />
        </EarnProvider>
    )
}

export function SignInUp() {
    let { openConnectModal } = useConnectModal()

    return (
        <div className="topbar-head-dropdown ms-1 header-item">
            <Button
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
                onClick={() => {
                    openConnectModal!()
                }}
            >
                <User className="rounded-circle header-profile-user" />
            </Button>
        </div>
    )
}

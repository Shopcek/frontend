import { Button } from 'react-bootstrap'
// import { useCart } from 'oldcontext/cart'
import { useEffect, useState } from 'react'

import { Cart as CartIcon } from 'components/images/Icons'

import { useRefetch } from 'context/refetch'
import { CartProvider, useCart } from 'context/cart'

import { useCartModalContext } from 'components/modals/cart/context'

export function Cart(props: { handlecardShow: any }) {
    function Component() {
        const { cart } = useRefetch()
        const { cartGQL } = useCart()
        const { openModal } = useCartModalContext()
        useEffect(() => {
            cartGQL?.fn()
        }, [])

        const [count, setCount] = useState(0)
        const [price, setPrice] = useState(0)
        useEffect(() => {
            switch (cartGQL?.status) {
                case 'success': {
                    setCount(cartGQL?.data!.count)
                    setPrice(cartGQL?.data!.price)
                }
            }
        }, [cart.refetched, cartGQL?.status])

        return (
            <div
                className="topbar-head-dropdown ms-1 header-item"
                style={{
                    cursor: 'pointer'
                }}
                onClick={openModal}
            >
                <Button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#ecommerceCart"
                    aria-controls="ecommerceCart"
                >
                    <CartIcon className="rounded-circle header-profile-user" />
                    <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">
                        {count}
                    </span>
                </Button>
                <h5
                    className="text-secondary"
                    style={{
                        paddingLeft: '15px',
                        marginBottom: '0px'
                    }}
                >
                    ${price}
                </h5>
            </div>
        )
    }

    return (
        <CartProvider>
            <Component></Component>
        </CartProvider>
    )
}

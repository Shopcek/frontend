import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { useBinance, BinanceProvider } from 'context/binance'
import { useCart, CartProvider } from 'context/cart'
import { useOrder, OrderProvider } from '../context'

import { buyWithWallet } from 'lib/rainbow'
import { useUser } from 'context/user'
import { useRefetch } from 'context/refetch'
// import { useOrder } from 'oldcontext/order'

export function order({ newOrder }: { newOrder: any }) {
    return ({ transaction }: { transaction: string }) => {
        newOrder.fn({
            variables: {
                transaction
            }
        })
    }
}

export const Shoporder = () => {
    function Component() {
        const navigate = useNavigate()

        const { bnb } = useBinance()
        const { cartGQL, cartId } = useCart()
        const { placeOrderGQL } = useOrder()
        const { status } = useUser()
        const [payment, setPayment] = useState(false)
        const { cart } = useRefetch()

        useEffect(() => {
            cartGQL?.fn({
                variables: {
                    id: cartId
                }
            })
        }, [])

        useEffect(() => {
            if (placeOrderGQL) {
                switch (placeOrderGQL.status) {
                    case 'success': {
                        setPayment(false)
                        cart.refetch(placeOrderGQL.data)
                        navigate(`/shop/order/${placeOrderGQL.data}`)
                        break
                    }
                    case 'error': {
                        setPayment(false)
                        break
                    }
                }
            }
        }, [placeOrderGQL?.status])

        const [pay, setPay] = useState<any>()

        useEffect(() => {
            if (cartGQL) {
                switch (cartGQL.status) {
                    case 'success': {
                        const price = cartGQL!.data!.price / bnb

                        if (bnb === 0) {
                            break
                        }
                        if (!payment) {
                            setPay(
                                <Button
                                    className="btn btn-hover btn-soft-info info-text"
                                    onClick={() => {
                                        buyWithWallet(
                                            () => {
                                                setPayment(true)
                                            },
                                            ({ transaction }) => {
                                                placeOrderGQL?.fn({
                                                    variables: {
                                                        transaction
                                                    }
                                                })
                                            },
                                            price
                                        )
                                    }}
                                    disabled={!(status === 'connected')}
                                >
                                    Pay {price.toFixed(3)} BNB <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                                </Button>
                            )
                        } else {
                            setPay(
                                <Button className="btn btn-hover btn-soft-info info-text" disabled>
                                    Payment process in progress <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                                </Button>
                            )
                        }
                        break
                    }

                    default: {
                        setPay(
                            <Button className="btn btn-hover btn-soft-info info-text" disabled>
                                Price calculating... <i className="ri-arrow-right-line label-icon align-middle ms-1"></i>
                            </Button>
                        )
                    }
                }
            }
        }, [cartGQL?.status, bnb, payment, status])

        return (
            <React.Fragment>
                <Card>
                    <Card.Body>
                        <div className="text-center">
                            <h6 className="mb-3 fs-15">
                                Have a <span className="fw-semibold">promo</span> code ?
                            </h6>
                        </div>
                        <div className="hstack gap-3 px-3 mx-n3">
                            <Form.Control
                                className="me-auto"
                                type="text"
                                placeholder="Enter coupon code"
                                defaultValue="Shopcek"
                                aria-label="Add Promo Code here..."
                            />
                            <button type="button" className="btn btn-primary w-xs">
                                Apply
                            </button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="overflow-hidden">
                    <Card.Header className="border-bottom-dashed">
                        <h5 className="card-title mb-0 fs-15">Payment Information</h5>
                    </Card.Header>
                    <Card.Body className=" pt-4">
                        <div className="table-responsive table-card justify-content-center">
                            <div className="info-text">
                                <ConnectButton />
                            </div>

                            <div className="info-text">
                                Your personal data will be used to process your order, support your experience throughout this website, and for other
                                purposes described in our privacy policy.
                            </div>
                            <Form.Check className="info-text" label="I have read and agree to the website terms and conditions" />
                        </div>
                    </Card.Body>
                    {pay}
                </Card>
            </React.Fragment>
        )
    }

    return (
        <CartProvider>
            <BinanceProvider>
                <OrderProvider>
                    <Component />
                </OrderProvider>
            </BinanceProvider>
        </CartProvider>
    )
}

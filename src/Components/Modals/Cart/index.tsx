import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

//component
import bagIcon from '../../../assets/images/remove-from-cart.png'
import { PopupT } from 'components/popup'

import { useNavigate } from 'react-router-dom'
import { useCart, CartProvider } from 'context/cart'
import { simplifyResponse } from 'lib/simplify-response'

import { Items } from './items'
import { useRefetch } from 'context/refetch'
import { useCartModalContext } from './context'

function formatNumber(num: number) {
    return num.toFixed(2)
}

export const CardModal = ({ show, handleClose }: any) => {
    function Component() {
        const {closeModal, isOpen} = useCartModalContext()

        let navigate = useNavigate()
        const { cartGQL, cartId } = useCart()
        const { cart } = useRefetch()

        const [items, setItems] = useState<any>()

        const [cartCount, setCartCount] = useState<any>()
        const [total, setTotalPrice] = useState(0)
        const [open, setOpen] = useState(false)
        useEffect(() => {
            if (cartGQL) {
                switch (cartGQL.status) {
                    case 'success': {
                        setCartCount(<span className="badge bg-secondary align-middle ms-1 cartitem-badge">{cartGQL.data!.items.length}</span>)
                        setItems(
                            <Items
                                items={cartGQL.data!.items}
                                openPopup={() => {
                                    setOpen(true)
                                }}
                            ></Items>
                        )
                        setTotalPrice(cartGQL?.data!.price)
                        break
                    }
                }
            }
        }, [cartGQL, cart.refetched])

        return (
            <React.Fragment>
                <Offcanvas show={isOpen} onHide={closeModal} placement="end" className="cart-modal">
                    <Offcanvas.Header closeButton className="border-bottom">
                        <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                            My Cart {cartCount}
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className=" px-0">
                        <SimpleBar className="h-100">{items}</SimpleBar>
                    </Offcanvas.Body>

                    <div className="offcanvas-footer border-top p-3 text-center">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="m-0 fs-16 text-muted">Total:</h6>
                            <div className="px-2">
                                <h6 className="m-0 fs-16 cart-total">${formatNumber(total)}</h6>
                            </div>
                        </div>

                        <Row className="g-2">
                            <Col xs={6}>
                                <Button
                                    variant="secondary"
                                    className="btn w-100"
                                    id="reset-layout"
                                    onClick={() => {
                                        navigate('/')
                                        closeModal()
                                    }}
                                >
                                    Continue Shopping
                                </Button>
                            </Col>
                            <Col xs={6}>
                                <Button
                                    variant="primary"
                                    className="btn btn-info w-100"
                                    onClick={() => {
                                        navigate('/shop/checkout')
                                        closeModal()
                                    }}
                                >
                                    Checkout
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    <PopupT
                        open={open}
                        handleClose={() => {
                            setOpen(false)
                        }}
                    >
                        <div className="added-to-cart">
                            <div className="info-text">Item removed from cart!</div>

                            <img className="bag" src={bagIcon} alt="" />
                        </div>
                    </PopupT>
                </Offcanvas>
            </React.Fragment>
        )
    }

    return (
        <CartProvider>
            <Component />
        </CartProvider>
    )
}

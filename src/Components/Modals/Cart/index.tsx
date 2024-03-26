import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

//component

import { useNavigate } from 'react-router-dom'
import { useCart, CartProvider } from 'context/cart'
import { simplifyResponse } from 'lib/simplify-response'

import { Items } from './Items'

function formatNumber(num: number) {
    return num.toFixed(2)
}

export const CardModal = ({ show, handleClose }: any) => {
    function Component() {
        let navigate = useNavigate()
        const { cartGQL, cartId } = useCart()

        const [items, setItems] = useState<any>()
        let cartCount
        useEffect(() => {
            cartGQL
                ?.refetch({
                    variables: { id: cartId }
                })
                .then((data: any) => {
                    if (!data.data) {
                        return
                    }

                    setItems(<Items items={simplifyResponse(data.data).items}></Items>)
                })
        }, [show])

        useEffect(() => {
            if (cartGQL) {
                switch (cartGQL.status) {
                    case 'success': {
                        cartCount = <span className="badge bg-danger align-middle ms-1 cartitem-badge">{cartGQL.data!.items.length}</span>
                        setItems(<Items items={cartGQL.data!.items}></Items>)
                        break
                    }
                }
            }
        }, [cartGQL])

        return (
            <React.Fragment>
                <Offcanvas show={show} onHide={handleClose} placement="end">
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
                                <h6 className="m-0 fs-16 cart-total">${formatNumber(0)}</h6>
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
                                        handleClose()
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
                                        handleClose()
                                    }}
                                >
                                    Checkout
                                </Button>
                            </Col>
                        </Row>
                    </div>
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

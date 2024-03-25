import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

//component
import DeleteModal from 'Components/Modals/DeleteModal'

import { useNavigate } from 'react-router-dom'
import { useCart, CartProvider } from 'context/cart'

import { Items } from './Items'

function formatNumber(num: number) {
    return num.toFixed(2)
}

export const CardModal = ({ show, handleClose }: any) => {
    function Component() {
        let navigate = useNavigate()
        const { cartGQL } = useCart()



        // let { cartItems, deleteItem, addItem } = useCart()

        const [id, setId] = useState('')
        //modal
        const [removeModel, setRemovemodel] = useState(false)
        const RemoveModel = (id: any) => {
            setRemovemodel(true)
            setId(id)
        }

        const deleteData = () => {
            // setProductcount(productData?.filter((delet: any) => delet.id !== id))
        }

        const CloseremoveModal = () => setRemovemodel(false)

        let [slug, setSlug] = useState('')
        let [options, setOptions] = useState({})

        let cartCount, items
        if (!cartGQL.loading && cartGQL.data && !cartGQL.error && cartGQL.called) {
            cartCount = <span className="badge bg-danger align-middle ms-1 cartitem-badge">{cartGQL.data.items.length}</span>
            items = <Items items={cartGQL.data.items}></Items>
        } else {
            cartCount = (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )

            items = (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )
        }

        return (
            <React.Fragment>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton className="border-bottom">
                        <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                            My Cart {cartCount}
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className=" px-0">
                        <SimpleBar className="h-100">
                        {items}
                        </SimpleBar>
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
                <DeleteModal hideModal={CloseremoveModal} removeModel={removeModel} deleteData={deleteData} slug={slug} options={options} />
            </React.Fragment>
        )
    }

    return (
        <CartProvider>
            <Component />
        </CartProvider>
    )
}

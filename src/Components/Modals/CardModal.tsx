import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

//component
import DeleteModal from 'Components/Modals/DeleteModal'

import { useNavigate } from 'react-router-dom'
import { useCart } from 'context/cart'

function formatNumber(num: number) {
    return num.toFixed(2)
}

export const CardModal = ({ show, handleClose }: any) => {
    let navigate = useNavigate()

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

    return (
        <React.Fragment>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                        My Cart <span className="badge bg-danger align-middle ms-1 cartitem-badge">{0}</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className=" px-0">
                    <SimpleBar className="h-100">
                        <ul className="list-group list-group-flush cartlist">
                            {/* {cartItems.map((item: any) => {
                                return (
                                    <li key={item.product.slug} className="list-group-item product">
                                        <div className="d-flex gap-3">
                                            <div className="flex-shrink-0">
                                                <div className={`avatar-md warning-subtle `} style={{ height: '110%', width: '110%' }}>
                                                    <div className={`avatar-title rounded-3`}>
                                                        <Image src={item.product.image} alt="" className="avatar-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <Link to={`/product-details/${item.product.slug}`}>
                                                    <h5 className="fs-15">{item.product.name}</h5>
                                                </Link>
                                                <div className="d-flex mb-3 gap-2">
                                                    <div className="options">
                                                        <span className="fw-medium">{`Color : ${item.options.color}`}</span>
                                                        <span className="fw-medium">{`Size : ${item.options.size}`}</span>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="input-step">
                                                        <Button
                                                            className="minus"
                                                            onClick={() => {
                                                                deleteItem(item.product.slug, item.options)
                                                            }}
                                                        >
                                                            -
                                                        </Button>
                                                        <Form.Control
                                                            type="number"
                                                            className="product-quantity"
                                                            value={item.count}
                                                            min="0"
                                                            max="100"
                                                            readOnly
                                                        />
                                                        <Button
                                                            className="plus"
                                                            onClick={() => {
                                                                addItem({
                                                                    ...item,
                                                                    count: 1
                                                                })
                                                            }}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>{' '}
                                                    X
                                                    <div className="text-muted fw-medium mb-0">
                                                        <span className="product-price"> ${formatNumber(item.product.price)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 d-flex flex-column justify-content-between align-items-end">
                                                <Button
                                                    className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
                                                    onClick={() => {
                                                        setSlug(item.product.slug)
                                                        setOptions(item.options)
                                                        RemoveModel(item.id)
                                                    }}
                                                >
                                                    <i className="ri-close-fill fs-16"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })} */}
                        </ul>
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
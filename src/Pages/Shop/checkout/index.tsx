import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Shoporder } from 'pages/shop/checkout/sidebar'

import { Products } from './products'
import { Address } from 'components/address'

import { useNavigate } from 'react-router-dom'

import { UserProvider, useUser } from 'context/user'
import { useRefetch } from 'context/refetch'

import { PopupT } from 'components/popup'
import bagIcon from '../../../assets/images/invoice.png'


const Checkout = () => {
    function Component() {
        const navigate = useNavigate()
        const [values, setValues] = useState()
        const { recipient } = useRefetch()
        const { recipientGQL, updateRecipientGQL } = useUser()

        useEffect(() => {
            recipientGQL.fn()
        }, [])

        const [address, setAddress] = useState<any>()
        const [recipientData, setRecipientData] = useState({})
        useEffect(() => {
            switch (recipientGQL.status) {
                case 'success': {
                    setRecipientData(recipientGQL.data)
                    setAddress(<Address setData={setValues} initialValues={recipientData}></Address>)
                }
            }
        }, [recipient.refetched, recipientGQL.status])


        const [open, setOpen] = useState(false)
        const [orderId, setOrderId] = useState(0)


        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={8}>{address}</Col>
                            <Col lg={4}>
                                <Products />
                                <Shoporder onOrderSuccess={(orderId: any)=>{
                                    setOrderId(orderId)
                                    setOpen(true)
                                }} />
                            </Col>
                        </Row>
                    </Container>
                    <PopupT
                        open={open}
                        handleClose={() => {
                            setOpen(false)
                        }}
                    >
                        <div className="added-to-cart">
                            <div className="info-text">Order Placed Successfully!</div>

                            <img className="bag" src={bagIcon} alt="" />

                            <button className="btn btn-primary" onClick={()=>{
                                navigate(`/shop/order/${orderId}`)
                            }}>
                                Order Details
                            </button>
                        </div>
                    </PopupT>
                </section>
            </React.Fragment>
        )
    }

    return (
        <UserProvider>
            <Component></Component>
        </UserProvider>
    )
}

export default Checkout

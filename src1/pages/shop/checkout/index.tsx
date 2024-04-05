import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Shoporder } from './sidebar'

import { Products } from './products'
import { Address } from '../../../components/address'

import { useNavigate } from 'react-router-dom'

import { UserProvider, useUser } from '../../../context/user'
import { useRefetch } from '../../../context/refetch'

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

        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={8}>{address}</Col>
                            <Col lg={4}>
                                <Products />
                                <Shoporder />
                            </Col>
                        </Row>
                    </Container>
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

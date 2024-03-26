import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Shoporder } from 'pages/shop/checkout/sidebar'

import { Products } from './products'
import { Address } from 'Components/address'


import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    let navigate = useNavigate()
    const [values, setValues] = useState()

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Address setData={setValues} initialValues={{}}></Address>
                        </Col>
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

export default Checkout

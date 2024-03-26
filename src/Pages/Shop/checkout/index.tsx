import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Shoporder } from 'pages/shop/checkout/sidebar'

import { Products } from './products'
import { Billing } from './billing'

import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    let navigate = useNavigate()

    document.title = 'Shopcek'
    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Billing />
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

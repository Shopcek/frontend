import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

import { ProductProvider, useProduct } from './context'
import { Details } from './details'
import { Pictures } from './pictures'

function ProductDetails() {
    function Component() {
        let { slug } = useParams()
        const { productGQL } = useProduct()

        useEffect(() => {
            if (productGQL) {
                productGQL.fn!({
                    variables: {
                        slug
                    }
                })
            }
        }, [])

        let details, pictures
        if (productGQL) {
            switch (productGQL.status) {
                case 'success': {
                    details = <Details data={productGQL.data!} />
                    pictures = (
                        <Pictures
                            image={productGQL.data!.image}
                            images={productGQL.data!.variants.map((variant) => {
                                return variant.image
                            })}
                        />
                    )
                    break
                }

                case 'error': {
                    break
                }

                case 'error-and-data': {
                    break
                }

                case 'loading': {
                    break
                }

                case 'not-called': {
                    break
                }
                case 'not-found': {
                    break
                }
            }
        }

        return (
            <React.Fragment>
                <div className="product-details-page">
                    <section className="section">
                        <Container className="product-details-container">
                            {pictures}
                            {details}
                        </Container>
                    </section>

                    <section className="section pt-0">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Description">
                                        <Row>
                                            <Col sm={12}>
                                                <Nav variant="underline" className="nav-tabs-custom mb-3">
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Information">
                                                            Additional Information
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Description">
                                                            Description
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Reviews">
                                                            Reviews
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Shipping">
                                                            Shipping
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content></Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <hr />

                    <section className="section pt-0">{/* <Slider items={productsList} title="Related Products"></Slider> end row */}</section>
                </div>
            </React.Fragment>
        )
    }

    return (
        <ProductProvider>
            <Component />
        </ProductProvider>
    )
}

export default ProductDetails

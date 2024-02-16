import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//img
import visa from 'assets/images/ecommerce/payment/visa.png'
import discover from 'assets/images/ecommerce/payment/discover.png'
import americanexpress from 'assets/images/ecommerce/payment/american-express.png'
import paypal from 'assets/images/ecommerce/payment/paypal.png'

import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'
import config from 'config/config'

const query = gql`
    query {
        getParentCategories {
            attributes {
                name
                slug
            }
        }
        logo {
            data {
                attributes {
                    text {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`

const Footer = () => {
    const { data, loading } = useQuery(query)
    let logodark = !loading ? config.serverUrl + data.logo.text.url : ''
    let logolight = !loading ? config.serverUrl + data.logo.text.url : ''

    return (
        <React.Fragment>
            <section className="section footer-landing pb-0">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="footer-info">
                                <Image src={logolight} alt="" height="40" className="logo-light" />
                                <Image src={logodark} alt="" height="40" className="logo-dark" />
                                <p className="footer-desc mt-4 mb-2 me-3">
                                    Toner provides best fashion experience for both men and women at best pricing. We follow New fashion approach to
                                    give best premium feel.
                                </p>

                                <div className="footer-social mt-4">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-facebook"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-twitter"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-google"></i>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-reset">
                                                <i className="mdi mdi-pinterest"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Row className="pl-0 pl-lg-3">
                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Categories</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            {(!loading ? data.getParentCategories : []).map((category: any) => {
                                                return (
                                                    <li>
                                                        <Link to="#">{category.name}</Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Information</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li>
                                                <Link to="#">Custom Service</Link>
                                            </li>
                                            <li>
                                                <Link to="#">FAQs</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Ordering</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Tracking</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Contacts</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">My Account</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li>
                                                <Link to="#">Sign In</Link>
                                            </li>
                                            <li>
                                                <Link to="#">View Cart</Link>
                                            </li>
                                            <li>
                                                <Link to="#">My Wishlist</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Track My Order</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Help</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="mt-lg-0 mt-4">
                                        <h5 className="footer-title">Customer Service</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li>
                                                <Link to="#">Payment Methods</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Money-back!</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Returns</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Shipping</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Terms and conditions</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Footer

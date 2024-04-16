import { Container, Table, Row, Col, Form, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { useOrder, OrderProvider } from '../context'

export default function Order() {
    function Component() {
        const { id } = useParams()
        const { orderGQL } = useOrder()

        useEffect(() => {
            orderGQL?.fn({
                variables: {
                    id
                }
            })
        }, [])

        const [infoBox, setInfoBox] = useState<any>()
        useEffect(() => {
            if (orderGQL) {
                switch (orderGQL?.status) {
                    case 'success': {
                        const { data } = orderGQL!
                        if (data.printful_order.error) {
                            setInfoBox(
                                <div className="success-info-box">
                                    <div className="top">
                                        <div className="title">Shopping Not Successful! ❌</div>
                                        <div className="success-message">Some error occured.</div>
                                        <div className="success-message">{data.printful_order.error}</div>
                                    </div>
                                </div>
                            )
                            return
                        }

                        setInfoBox([
                            <div className="success-info-box">
                                <div className="top">
                                    <div className="title">Shopping Successful! ✅</div>
                                    <div className="success-message">
                                        Thank You For Your Purchase! Your transaction has been successfully completed.
                                    </div>
                                </div>

                                <div className="tables">
                                    <div className="information-table">
                                        <div className="title">Payment</div>
                                        <Table striped bordered hover responsive>
                                            <tbody>
                                                <tr>
                                                    <td>Order Number</td>
                                                    <td>{125000 + data.id}</td>
                                                </tr>
                                                <tr>
                                                    <td>Transaction Hash</td>
                                                    <td>
                                                        <a target='_blank' href={`https://testnet.bscscan.com/tx/${data.transaction}`}>{data.transaction}</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Date</td>
                                                    <td>
                                                        {data.createdAt.split('T')[0]} {data.createdAt.split('T')[1].split('.')[0]}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Discount Rate</td>
                                                    <td>%95</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <b>Price</b>
                                                    </td>
                                                    <td>
                                                        <b>{data.cart.price.toFixed(2)}</b>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="information-table products">
                                        <div className="title">Products</div>
                                        <Table striped bordered hover>
                                            <tbody>
                                                {data.cart.items.map((item: any) => {
                                                    return (
                                                        <tr key={item.variant.product.slug + JSON.stringify(item.options)}>
                                                            <td className="image">
                                                                <Image src={item.variant.image} className="avatar-md"></Image>
                                                            </td>
                                                            <td>
                                                                <div className="info">{item.variant.product.name}</div>
                                                            </td>
                                                            <td>
                                                                <div className="price">{item.totalPrice.toFixed(2)}</div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>,
                            <div className="success-info-box shipping">
                                <div className="title">Shipping Information</div>

                                <Row className="details">
                                    <Col>
                                        <Row>
                                            <div className="detail">
                                                <b>First Name: </b>
                                                {data.recipient.name.split(' ')[0]}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Email Address:</b>
                                                {data.recipient.email}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Country / Region:</b> {data.recipient.country_name}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Town / City:</b> {data.recipient.city}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Postcode / ZIP:</b> {data.recipient.zip}
                                            </div>
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Row>
                                            <div className="detail">
                                                <b>Last Name:</b>
                                                {data.recipient.name.split(' ').length > 1 ? data.recipient.name.split(' ') : ''}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Phone:</b> {data.recipient.phone}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>State:</b> {data.recipient.state_code}
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="detail">
                                                <b>Street Adress:</b> {data.recipient.address1 + ' / ' + data.recipient.address2}
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        ])

                        break
                    }

                    default: {
                        setInfoBox(
                            <div className="success-info-box">
                                <div className="top">
                                    <div className="title">Order Not Found! ❌</div>
                                    <div className="success-message">Some error occured.</div>
                                    <div className="success-message">There is no order or you cant access this order</div>
                                </div>
                            </div>
                        )
                    }
                }
            }
        }, [orderGQL?.status])

        return (
            <section className="section">
                <Container className="success-page">{infoBox}</Container>
            </section>
        )
    }

    return (
        <OrderProvider>
            <Component />
        </OrderProvider>
    )
}

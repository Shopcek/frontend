import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { useUser } from '../../../../context/user'
import { useEffect, useState } from 'react'

export function OrdersNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link
                as="a"
                onClick={() => {
                    navigate('/account/order')
                }}
                eventKey="order"
                className="fs-15"
                role="presentation"
            >
                <i className="bi bi-bag align-middle me-1"></i> Orders
            </Nav.Link>
        </Nav.Item>
    )
}

export function OrdersTab() {
    let navigate = useNavigate()
    const { userOrdersGQL } = useUser()

    useEffect(() => {
        userOrdersGQL?.fn()
    }, [])

    const [orders, setOrders] = useState<any>()
    useEffect(() => {
        if (userOrdersGQL) {
            switch (userOrdersGQL.status) {
                case 'success': {
                    const { data } = userOrdersGQL
                    setOrders(
                        <tbody>
                            {data.map((item: any, inx: any) => {
                                return (
                                    <tr key={inx}>
                                        <td>{item.id}</td>
                                        <td>{item.createdAt.slice(0, 10)}</td>
                                        <td className={`text-${item.error ? 'danger' : 'success'}`}>{item.error ? 'failed' : 'success'}</td>
                                        <td>
                                            <span className="text-primary">{item.price.toFixed(2)}$</span> for {item.count} item.
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    navigate(`/shop/order/${item.id}`)
                                                }}
                                                className="btn btn-primary w-100"
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )
                }
            }
        }
    }, [userOrdersGQL?.status])

    return (
        <Tab.Pane eventKey="order">
            <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                <Card>
                    <Card.Body>
                        <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                {orders}
                            </Table>
                        </div>
                        <div className="text-end mt-4">
                            <Link to={'/'} className="btn btn-hover btn-primary">
                                Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}

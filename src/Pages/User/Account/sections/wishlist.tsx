import { Nav, Row, Col, Card, Table, Tab } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export function WishListNav() {
    return (
        <Nav.Item as="li">
            <Nav.Link as="a" eventKey="wishlist" className="fs-15" role="presentation">
                <i className="bi bi-bookmark-check align-middle me-1"></i> Wish list
            </Nav.Link>
        </Nav.Item>
    )
}

export function WishListTab() {
    let navigate = useNavigate()

    return (
        <Tab.Pane eventKey="wishlist">
            <div className="tab-pane fade show" id="custom-v-pills-list" role="tabpanel">
                <Row>
                    <Col lg={12}>
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <div className="table-responsive table-card">
                                    <Table className="fs-15 align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        {/* <tbody>
                                            {wishlist.map((item, inx) => {
                                                return (
                                                    <tr key={inx}>
                                                        <td>
                                                            <div className="d-flex gap-3">
                                                                <div className="avatar-sm flex-shrink-0">
                                                                    <div className={`avatar-title bg-${item.bg}-subtle rounded`}>
                                                                        <Image src={item.image} alt="" className="avatar-xl" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <p className="mb-0 fs-13">
                                                                        <b>{item.name}</b>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>${item.price}</td>
                                                        <td>
                                                            <ul className="list-unstyled d-flex gap-3 mb-0">
                                                                <li>
                                                                    <Button
                                                                        onClick={() => {
                                                                            navigate(`/product-details/${item.slug}`)
                                                                        }}
                                                                        className="btn btn-soft-info btn-icon btn-xl"
                                                                    >
                                                                        <i className="ri-shopping-cart-2-line fs-13"></i>
                                                                        <div className="text">Buy Now</div>
                                                                    </Button>
                                                                </li>
                                                                <li>
                                                                    <Button
                                                                        onClick={() => {
                                                                            deleteWishList(item.slug)
                                                                        }}
                                                                        className="btn btn-soft-danger btn-icon btn-xl"
                                                                    >
                                                                        <i className="ri-close-line fs-13"></i>
                                                                        <div className="text">Delete</div>
                                                                    </Button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody> */}
                                    </Table>
                                </div>
                                <div className="hstack gap-2 justify-content-end mt-4">
                                    <Link to="/product-list" className="btn btn-hover btn-secondary">
                                        Continue Shopping <i className="ri-arrow-right-line align-bottom"></i>
                                    </Link>
                                    <Link to="/shop/checkout" className="btn btn-hover btn-primary">
                                        Check Out <i className="ri-arrow-right-line align-bottom"></i>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Tab.Pane>
    )
}

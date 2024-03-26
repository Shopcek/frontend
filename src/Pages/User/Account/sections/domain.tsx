import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

// import { useEarn } from 'oldcontext/earn'
// import { useUser } from 'oldcontext/user'

import NameService from 'pages/earn/NameServices'

export function DomainsNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link as="a" onClick={()=>{
                navigate('/account/domains')
            }} eventKey="domains" className="fs-15" role="presentation">
                <i className="bi bi-bag align-middle me-1"></i> Domains
            </Nav.Link>
        </Nav.Item>
    )
}

export function DomainsTab() {
    let navigate = useNavigate()
    // let { getDomainsByUser, chooseDomainRES } = useEarn()
    // let {choosenDomain} = useUser()

    return (
        <Tab.Pane eventKey="domains" className='domains'>
            <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                <Card>
                    <Card.Body>
                    <NameService />
                        <div className="table-responsive table-card">
                            <Table className="fs-15 align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {getDomainsByUser.map((item: any, inx: any) => {
                                        return (
                                            <tr>
                                                <td>{item.domain}</td>
                                                <td>
                                                    <button
                                                        onClick={() => {
                                                            chooseDomainRES.fn({
                                                                variables: {
                                                                    domain: item.domain
                                                                }
                                                            })
                                                            choosenDomain.choosenDomainRES.refetch()
                                                        }}
                                                        

                                                        className="btn btn-primary w-100"
                                                    >
                                                        Choose
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })} */}
                                </tbody>
                            </Table>
                        </div>
                        <div className="text-end mt-4">
                            <Link to={'/products-grid'} className="btn btn-hover btn-primary">
                                Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}

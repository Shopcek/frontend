import { Tab, Card, Table, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import { useEarn, EarnProvider } from 'context/earn'
import { useEffect, useState } from 'react'
import { useRefetch } from 'context/refetch'

import NameService, { prices, NameServiceWithoutEarnProvider } from 'pages/earn/name-services'


export function DomainsNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link
                as="a"
                onClick={() => {
                    navigate('/account/domains')
                }}
                eventKey="domains"
                className="fs-15"
                role="presentation"
            >
                <i className="bi bi-bag align-middle me-1"></i> Username
            </Nav.Link>
        </Nav.Item>
    )
}

export function DomainsTab() {
    function Component() {
        const navigate = useNavigate()
        const { userDomainsGQL, chooseDomainGQL } = useEarn()
        const [domains, setDomains] = useState<any>()
        const {domains:domainsRefetch, choosen} = useRefetch()
        
        function findPrice(domain: string){
            return prices.find(price=>{
                return domain.length < price.max  && domain.length >= price.min
            })?.price
        }

        useEffect(()=>{
            switch(chooseDomainGQL.status){
                case 'success':{
                    choosen.refetch()
                }
            }
        },[chooseDomainGQL.status])

        useEffect(() => {
            switch (userDomainsGQL.status) {
                case 'success': {
                    setDomains(
                        <tbody>
                            {userDomainsGQL.data.map((item: any, inx: any) => {
                                return (
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{findPrice(item.username)}$</td>
                                        <td>{item.createdAt.slice(0,10)}</td>
                                        <td>
                                            <div className="choose">
                                            <button
                                                onClick={() => {
                                                    chooseDomainGQL.fn({
                                                        variables: {
                                                            username: item.username
                                                        }
                                                    })
                                                }}
                                                className="btn btn-primary"
                                            >
                                                Choose
                                            </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    )
                }
            }
        }, [userDomainsGQL.status, domainsRefetch.refetched])

        useEffect(() => {
            userDomainsGQL.refetch()
        }, [])

        return (
            <Tab.Pane eventKey="domains" className="domains">
                <div className="tab-pane fade show" id="custom-v-pills-order" role="tabpanel">
                    <Card>
                        <Card.Body>
                            <div className="table-responsive table-card">
                                <Table className="fs-15 align-middle table-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    {domains}
                                </Table>
                            </div>
                            <div className="text-end mt-4">
                                <Link to={'/products-grid'} className="btn btn-hover btn-primary">
                                    Continue Shopping <i className="ri-arrow-right-line align-middle ms-1"></i>
                                </Link>
                            </div>

                            <div className="earn-page">
                            <NameServiceWithoutEarnProvider></NameServiceWithoutEarnProvider>
                            </div>
                        </Card.Body>
                    </Card>

                    
                </div>
            </Tab.Pane>
        )
    }

    return (
        <EarnProvider>
            <Component></Component>
        </EarnProvider>
    )
}

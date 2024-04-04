import {
    OrdersNav,
    OrdersTab,
    WishListNav,
    WishListTab,
    XpNav,
    XpTab,
    AddressNav,
    AddressTab,
    LogoutNav,
    StakeNav,
    DomainsNav,
    DomainsTab
} from './sections'
import { Col, Container, Row, Tab, Nav, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export function UserNav() {
    let { section } = useParams()

    return (
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey={section ? section : 'domains'}>
                <Row>
                    <Col lg={3}>
                        <Card>
                            <Card.Body>
                                <Nav variant="pills" className="flex-column gap-3">
                                    <DomainsNav />
                                    <WishListNav />
                                    <OrdersNav />
                                    <XpNav />
                                    <AddressNav />
                                    <StakeNav />
                                </Nav>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <WishListTab />
                            <OrdersTab />
                            <AddressTab />
                            <XpTab />
                            <DomainsTab />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    )
}
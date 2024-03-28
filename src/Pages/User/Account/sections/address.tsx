import { Nav, Tab, Button, Card } from 'react-bootstrap'
import { Address } from 'components/address'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRefetch } from 'context/refetch'
import { useUser } from 'context/user'

export function AddressNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link
                onClick={() => {
                    navigate('/account/address')
                }}
                as="a"
                eventKey="address"
                className="fs-15"
                role="presentation"
            >
                <i className="bi bi-building-add align-middle me-1"></i> Address
            </Nav.Link>
        </Nav.Item>
    )
}

export function AddressTab() {
    const [values, setValues] = useState()
    const { recipient } = useRefetch()
    const { recipientGQL, updateRecipientGQL } = useUser()

    useEffect(() => {
        recipientGQL.fn()
    }, [])

    const [address, setAddress] = useState<any>()
    useEffect(() => {
        switch (recipientGQL.status) {
            case 'success': {
                setAddress(<Address setData={setValues} initialValues={recipientGQL.data}></Address>)
            }
        }
    }, [recipient.refetched, recipientGQL.status])

    return (
        <Tab.Pane eventKey="address">
            <div className="tab-pane fade show" id="custom-v-pills-setting" role="tabpanel">
                <Card>
                    <Card.Body>
                        {address}
                        <Button className="btn btn-secondary">Update</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}
;<Card>
    <Card.Body></Card.Body>
</Card>

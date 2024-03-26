import { Nav, Tab, Button, Card } from 'react-bootstrap'
import { Address } from 'Components/address'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export function AddressNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link onClick={()=>{
                navigate('/account/address')
            }} as="a" eventKey="address" className="fs-15" role="presentation">
                <i className="bi bi-building-add align-middle me-1"></i> Address
            </Nav.Link>
        </Nav.Item>
    )
}

export function AddressTab() {
    const [values, setValues] = useState()

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <Tab.Pane eventKey="address">
            <div className="tab-pane fade show" id="custom-v-pills-setting" role="tabpanel">
                <Card>
                    <Card.Body>
                        <Address setData={setValues} initialValues={{}}></Address>
                        <Button className="btn btn-secondary">Update</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </Tab.Pane>
    )
}
<Card>
<Card.Body>
</Card.Body>
</Card>
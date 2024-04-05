import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function StakeNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link
                as="a"
                onClick={() => {
                    navigate('/account/stake')
                }}
                eventKey="stake"
                className="fs-15"
                role="presentation"
            >
                <i className="bi bi-piggy-bank align-middle me-1"></i> Stake
            </Nav.Link>
        </Nav.Item>
    )
}

// import { useEarn } from 'oldcontext/earn'
import { Nav } from 'react-bootstrap'

import { Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export function XpNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link onClick={()=>{
                navigate('/account/xp-points')
            }} as="a" eventKey="xp-points" className="fs-15" role="presentation">
                <i className="bi bi-coin align-middle me-1"></i> XP Points
            </Nav.Link>
        </Nav.Item>
    )
}

export function XpTab() {
    // let { xp } = useEarn()

    return (
        <Tab.Pane eventKey="xp-points">
            <div className="card">
                <div className="card-body">
                    <div className="xp-points">
                        <div className="text">
                            <div>Total</div>
                            <div>:</div>
                            <div>{0}</div>
                        </div>

                        <div className="buttons">
                            <button className="btn btn-primary">Collect XP</button>
                            <button className="btn btn-secondary">EarnDocs</button>
                        </div>
                    </div>
                </div>
            </div>
        </Tab.Pane>
    )
}

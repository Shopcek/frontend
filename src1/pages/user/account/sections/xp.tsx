// import { useEarn } from 'oldcontext/earn'
import { Nav } from 'react-bootstrap'

import { Tab } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { EarnProvider, useEarn } from '../../../../context/earn'
import { useEffect, useState } from 'react'
import { useRefetch } from '../../../../context/refetch'

export function XpNav() {
    const navigate = useNavigate()

    return (
        <Nav.Item as="li">
            <Nav.Link
                onClick={() => {
                    navigate('/account/xp-points')
                }}
                as="a"
                eventKey="xp-points"
                className="fs-15"
                role="presentation"
            >
                <i className="bi bi-coin align-middle me-1"></i> XP Points
            </Nav.Link>
        </Nav.Item>
    )
}

export function XpTab() {
    function Component() {
        const { xpGQL } = useEarn()
        const { xp } = useRefetch()

        useEffect(() => {
            xpGQL.fn()
        }, [xpGQL.status])

        const [XP, setXP] = useState<any>()
        useEffect(() => {
            switch (xpGQL.status) {
                case 'success': {
                    setXP(
                        <div className="text">
                            <div>Total</div>
                            <div>:</div>
                            <div>{xpGQL.data}</div>
                        </div>
                    )
                }
            }
        }, [xpGQL.status, xp.refetched])

        return (
            <Tab.Pane eventKey="xp-points">
                <div className="card">
                    <div className="card-body">
                        <div className="xp-points">
                            {XP}
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

    return (
        <EarnProvider>
            <Component></Component>
        </EarnProvider>
    )
}

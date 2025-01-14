import { Container } from 'react-bootstrap'
import { User } from 'components/images/Icons'
import { Link, useNavigate } from 'react-router-dom'

import { useUser } from 'context/user'
import { useEarn, EarnProvider } from 'context/earn'
import { useEffect, useState } from 'react'
import { useRefetch } from 'context/refetch'

export function UserSection({setTabSection}: {
    setTabSection: (section:string)=>void
}) {
    function Component() {
        const { address } = useUser()
        const { choosenGQL } = useEarn()
        const {choosen} = useRefetch()

        useEffect(() => {
            choosenGQL.refetch()
        }, [choosen.refetched])

        useEffect(() => {
            choosenGQL.fn()
        }, [])

        const [username, setUsername] = useState()
        useEffect(() => {
            switch (choosenGQL.status) {
                case 'success': {
                    setUsername(choosenGQL.data.username)
                }
            }
        }, [choosenGQL.status, choosen.refetched])

        //@ts-ignore
        let sliced = `${address.slice(0, 6)}...${address.slice(address.length - 6, address.length)}`

        const navigate = useNavigate()

        return (
            <Container className="account-top">
                <div className="pt-3">
                    <div className="d-flex gap-3 flex-wrap align-items-center">
                        <User className="avatar-xl p-1 bg-light mt-n3" />
                        <div>
                            <h5 className="fs-18">
                                {username}
                                <div className="edit">
                                    <i className="bi bi-pen change-username" onClick={
                                        ()=>{
                                            navigate('/account/domains')
                                            window.location.reload()
                                        }
                                    }></i>
                                </div>
                            </h5>
                            <div className="text-muted">{sliced}</div>
                        </div>
                        <div className="ms-md-auto">
                            <Link to="/" className="btn btn-primary btn-hover">
                                <i className="bi bi-cart4 me-1 align-middle"></i> Shopping Now
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <EarnProvider>
            <Component></Component>
        </EarnProvider>
    )
}

import React, { useEffect, useState } from 'react'
import { UserSection } from './user'
import { UserNav } from './nav'

import { UserProvider } from 'context/user'
import { useParams } from 'react-router-dom'
const Account = () => {
    let { section } = useParams()
    const [tabSection, setTabSection] = useState<string>(section || '')

    useEffect(()=>{console.log(tabSection)},
        
    [tabSection])

    return (
        <React.Fragment>
            <UserProvider>
                <section className="position-relative">
                    <UserSection setTabSection={setTabSection}/>
                </section>
                <section className="account py-5">
                    <UserNav section={tabSection} />
                </section>
            </UserProvider>
        </React.Fragment>
    )
}

export default Account

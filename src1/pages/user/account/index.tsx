import React from 'react'
import { UserSection } from './user'
import { UserNav } from './nav'

import { UserProvider } from '../../../context/user'

const Account = () => {
    return (
        <React.Fragment>
            <UserProvider>
                <section className="position-relative">
                    <UserSection />
                </section>
                <section className="account py-5">
                    <UserNav />
                </section>
            </UserProvider>
        </React.Fragment>
    )
}

export default Account

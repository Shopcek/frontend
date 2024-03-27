import { createContext, useContext, useState, useEffect } from 'react'

import * as queries from './queries'
import * as mutations from './mutations'

import { useMutation, useLazyQuery } from 'lib/query-wrapper'

import { useUser, UserProvider } from 'context/user'

//@ts-ignore
const EarnContext = createContext<{
    streakGQL: ReturnType<typeof useLazyQuery>
    lastClaimGQL: ReturnType<typeof useLazyQuery>
    claimGQL: ReturnType<typeof useMutation>
    startSessionGQL: ReturnType<typeof useMutation>
}>({} as any)

export function EarnProvider({ children }: { children: any }) {
    function Component() {
        const {status} = useUser()

        useEffect(()=>{
            switch(status){
                case 'connected':{
                    startSessionGQL.fn()
                    break
                }
            }
        }, [status])


        const streakGQL = useLazyQuery(queries.streak)
        const lastClaimGQL = useLazyQuery(queries.lastClaim)
        const claimGQL = useMutation(mutations.claim)
        const startSessionGQL = useMutation(mutations.startSession)

        return <EarnContext.Provider value={{ streakGQL, lastClaimGQL, claimGQL, startSessionGQL }}>{children}</EarnContext.Provider>
    }

    return (
        <UserProvider>
            <Component/>
        </UserProvider>
    )
}

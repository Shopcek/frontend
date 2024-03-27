import { createContext, useContext, useState, useEffect } from 'react'

import * as queries from './queries'
import * as mutations from './mutations'

import { useMutation, useLazyQuery, useQuery } from 'lib/query-wrapper'

import { useUser, UserProvider } from 'context/user'

//@ts-ignore
const EarnContext = createContext<{
    streakGQL: ReturnType<typeof useLazyQuery<any>>
    lastClaimGQL: ReturnType<typeof useLazyQuery<any>>
    xpGQL: ReturnType<typeof useLazyQuery<any>>
    claimGQL: ReturnType<typeof useMutation<any>>
    startSessionGQL: ReturnType<typeof useMutation<any>>
    loginRewardsGQL: ReturnType<typeof useQuery<any>>
    time: any
}>({} as any)


export function useEarn(){
    return useContext(EarnContext)
}

export function EarnProvider({ children }: { children: any }) {
    function Component() {
        const [time, setTime] = useState(Date.now());

        useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
        }, []);

        const {status} = useUser()

        useEffect(()=>{
            switch(status){
                case 'connected':{
                    startSessionGQL.fn()
                    break
                }
            }
        }, [status])

        const streakGQL = useLazyQuery<any>(queries.streak)
        const lastClaimGQL = useLazyQuery<any>(queries.lastClaim)
        const claimGQL = useMutation<any>(mutations.claim)
        const startSessionGQL = useMutation<any>(mutations.startSession)
        const xpGQL = useLazyQuery<any>(queries.xp)
        const loginRewardsGQL = useQuery<any>(queries.loginRewards)

        return <EarnContext.Provider value={{ streakGQL, lastClaimGQL, claimGQL, startSessionGQL, xpGQL, loginRewardsGQL, time }}>{children}</EarnContext.Provider>
    }

    return (
        <UserProvider>
            <Component/>
        </UserProvider>
    )
}

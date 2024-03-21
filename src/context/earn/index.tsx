import { createContext, useContext, useEffect, useState } from 'react'

import {
    xp as xpGQL,
    addXp as addXpGQL,
    loginData as loginDataGQL,
    spinData as spinDataGQL,
    spin as spinGQL,
    loginStreak as loginStreakGQL,
    checkDomain as checkDomainGQL,
    addNewDomainToUser as addNewDomainToUserGQL,
    getDomainsByUser as getDomainsByUserGQL,
    chooseDomain as chooseDomainGQL
} from '../../lib/common-queries'
import { useMutation, useQuery, useLazyQuery } from 'lib/query-wrapper'

import type { EarnContextType } from './types'
export type { EarnContextType }

export const EarnContext = createContext<EarnContextType>({
    xpGQL: {},
    xpRES: {},
    xp: 0,

    addXpGQL: {},
    addXpRES: {},
    addXp: 0,

    spinGQL: {},
    spinRES: {},
    spin: 0,

    spinDataGQL: {},
    spinDataRES: {},
    spinData: 0,

    loginStreakGQL: {},
    loginStreakRES: {},
    loginStreak: 0,

    loginDataGQL: {},
    loginDataRES: {},
    loginData: {
        lastLogin: 0,
        loginCount: 0
    },

    checkDomain: false,
    checkDomainGQL: {},
    checkDomainRES: {},

    addNewDomainToUser: {},
    addNewDomainToUserRES: {},
    addNewDomainToUserGQL: {},

    chooseDomain: {},
    chooseDomainRES: {},
    chooseDomainGQL: {},

    getDomainsByUser: {},
    getDomainsByUserRES: {},
    getDomainsByUserGQL: {},

    time: 0,
    setTime: (time: number) => {}
})

export function useEarn() {
    return useContext(EarnContext) as EarnContextType
}

export function EarnProvider({ children }: { children: any }) {
    //@ts-ignore
    let [checkDomainFN, checkDomainRES] = useLazyQuery(checkDomainGQL, {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first'
    })
    let [checkDomain, setCheckDomain] = useState(false)

    useEffect(() => {
        if (checkDomainRES.data && !checkDomainRES.loading && JSON.stringify(checkDomainRES.data) !== JSON.stringify(checkDomain)) {
            setCheckDomain(checkDomainRES.data)
        }
    }, [checkDomainRES.loading, checkDomainRES.data])

    ///////
    let xpRES = useQuery(xpGQL)
    let [xp, setXp] = useState(0)

    useEffect(() => {
        if (xpRES.data && !xpRES.loading && JSON.stringify(xpRES.data) !== JSON.stringify(xp)) {
            setXp(xpRES.data)
        }
    }, [xpRES.loading, xpRES.data])

    ///////
    let chooseDomainRES = useMutation(chooseDomainGQL)
    let [chooseDomain, setChooseDomainGQL] = useState({})

    useEffect(() => {
        if (chooseDomainRES.data && !chooseDomainRES.loading && JSON.stringify(chooseDomainRES.data) !== JSON.stringify(chooseDomain)) {
            setChooseDomainGQL(chooseDomainRES.data)
        }
    }, [chooseDomainRES.loading, chooseDomainRES.data])

    ///////
    let getDomainsByUserRES = useQuery(getDomainsByUserGQL)
    let [getDomainsByUser, setGetDomainsByUserGQL] = useState([])

    useEffect(() => {
        if (
            getDomainsByUserRES.data &&
            !getDomainsByUserRES.loading &&
            JSON.stringify(getDomainsByUserRES.data) !== JSON.stringify(getDomainsByUser)
        ) {
            setGetDomainsByUserGQL(getDomainsByUserRES.data)
        }
    }, [getDomainsByUserRES.loading, getDomainsByUserRES.data])
    ///////
    let addNewDomainToUserRES = useMutation(addNewDomainToUserGQL)
    let [addNewDomainToUser, setAddNewDomainToUser] = useState({})

    useEffect(() => {
        if (addNewDomainToUserRES.data && !addNewDomainToUserRES.loading) {
            setAddNewDomainToUser(addNewDomainToUserRES.data)
        }
    }, [addNewDomainToUserRES.loading])

    ///////
    let spinRES = useMutation(spinGQL)
    let [spin, setSpin] = useState(0)

    useEffect(() => {
        if (spinRES.data && !spinRES.loading) {
            setSpin(spinRES.data)
        }
    }, [spinRES.loading])

    //////
    let spinDataRES = useQuery(spinDataGQL)
    let [spinData, setSpinData] = useState(0)

    useEffect(() => {
        if (spinDataRES.data && !spinDataRES.loading) {
            setSpinData(spinDataRES.data)
        }
    }, [spinDataRES.loading])

    //////
    let loginStreakRES = useMutation(loginStreakGQL)
    let [loginStreak, setLoginStreak] = useState(0)

    useEffect(() => {
        if (loginStreakRES.data && !loginStreakRES.loading) {
            setLoginStreak(loginStreakRES.data)
            loginDataRES.refetch()
        }
    }, [loginStreakRES.loading])

    //////
    let loginDataRES = useQuery(loginDataGQL)
    let [loginData, setLoginData] = useState(0)

    useEffect(() => {
        if (loginDataRES.data && !loginDataRES.loading && JSON.stringify(loginDataRES.data) !== JSON.stringify(loginData)) {
            setLoginData(loginDataRES.data)
        }
    }, [loginDataRES.loading, loginDataRES.data])

    //////
    let addXpRES = useMutation(addXpGQL)
    let [addXp, setAddXp] = useState(0)

    useEffect(() => {
        if (addXpRES.data && !addXpRES.loading && JSON.stringify(addXpRES.data) !== JSON.stringify(addXp)) {
            setAddXp(addXpRES.data)
            xpRES.refetch()
        }
    }, [addXpRES.loading, addXpRES.data])

    let [firstTime, setTime] = useState(0)

    useEffect(() => {
        setTime(new Date().valueOf())
    }, [])

    useEffect(() => {
        xpRES.refetch()
    }, [loginStreakRES.loading, spinRES.loading])

    return (
        <EarnContext.Provider
            value={{
                xp,
                xpGQL,
                xpRES,
                addXp,
                addXpGQL,
                addXpRES,
                loginData,
                loginDataGQL,
                loginDataRES,
                loginStreak,
                loginStreakGQL,
                loginStreakRES,
                spin,
                spinData,
                spinDataGQL,
                spinDataRES,
                spinGQL,
                spinRES,
                time: firstTime,
                setTime,
                checkDomain,
                checkDomainGQL,
                checkDomainRES: {
                    ...checkDomainRES,
                    fn: checkDomainFN
                },

                addNewDomainToUser,
                addNewDomainToUserRES,
                addNewDomainToUserGQL,

                chooseDomain,
                chooseDomainRES,
                chooseDomainGQL,
                getDomainsByUser,
                getDomainsByUserRES,
                getDomainsByUserGQL
            }}
        >
            {children}
        </EarnContext.Provider>
    )
}

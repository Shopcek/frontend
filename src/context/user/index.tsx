import { createContext, useContext, useState, useEffect } from 'react'

import { useMutation } from 'lib/query-wrapper'
import * as mutations from './mutations'
// import * as queries from './queries'

import { useAccount, useDisconnect } from 'wagmi'
import { wagmiConfig } from 'lib/rainbow'

export const UserContext = createContext<{
    status: string
    clearSession?: Function
    connectWalletGQL?: any
    jwt?: string
    address?: string
}>({
    status: 'disconnected'
})

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }: { children: any }) {
    const [jwt, setJwt] = useState(localStorage.getItem('jwt') || undefined)

    const connectWalletGQL = useMutation(mutations.connectWallet)
    const { address, status } = useAccount({
        config: wagmiConfig
    })

    function clearSession() {
        setJwt(undefined)
        disconnect()
        localStorage.removeItem('jwt')
    }

    useEffect(() => {
        switch (status) {
            case 'connected': {
                connectWalletGQL.fn({
                    variables: {
                        address
                    }
                })
                break
            }

            case 'disconnected': {
                clearSession()
            }
        }
    }, [status])

    useEffect(() => {
        if (!connectWalletGQL.loading && connectWalletGQL.data) {
            setJwt(connectWalletGQL.data)
            localStorage.setItem('jwt', connectWalletGQL.data)
        }
    }, [connectWalletGQL.loading])

    useEffect(() => {
        if (connectWalletGQL.error) {
            if (connectWalletGQL.error.message === 'You already logged in!') {
                return
            }

            clearSession()
            console.log(connectWalletGQL.error.message)
        }
    }, [connectWalletGQL.error])

    const { disconnect } = useDisconnect({
        config: wagmiConfig
    })

    return <UserContext.Provider value={{ status, jwt, address, clearSession, connectWalletGQL }}>{children}</UserContext.Provider>
}

import { createContext, useContext, useState, useEffect } from 'react'

import { useMutation } from 'lib/query-wrapper'
import * as mutations from './mutations'
// import * as queries from './queries'

import { useAccount, useDisconnect } from 'wagmi'
import { wagmiConfig } from 'lib/rainbow'

export const UserContext = createContext<{
    status: string
    logout?:boolean
    disconnect?: Function
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
    const [logout, setLogout] = useState(false)

    const connectWalletGQL = useMutation<any>(mutations.connectWallet)
    const { address, status } = useAccount({
        config: wagmiConfig
    })

    const cartId = localStorage.getItem('cartId')

    function clearSession() {
        setLogout(true)
        setJwt(undefined)
        localStorage.removeItem('jwt')
        localStorage.removeItem('cartId')
    }

    useEffect(() => {
        switch (status) {
            case 'connected': {
                if (!jwt){
                    connectWalletGQL.fn({
                        variables: {
                            address,
                            cartId: cartId
                        }
                    })
                }
                break
            }
            case 'disconnected': {
                if (jwt){
                    disconnect()
                }
            }
        }
    }, [status])

    useEffect(() => {
        if (!connectWalletGQL.loading && connectWalletGQL.data) {
            setJwt(connectWalletGQL.data)
            localStorage.setItem('jwt', connectWalletGQL.data)
            localStorage.removeItem('cartId')
            window.location.reload()
        }
    }, [connectWalletGQL.loading])

    useEffect(() => {
        if (connectWalletGQL.error) {
            if (connectWalletGQL.error.message === 'You already logged in!') {
                return
            }
            disconnect()
        }
    }, [connectWalletGQL.error])

    const { disconnect } = useDisconnect({
        config: wagmiConfig,
        mutation: {
            onSuccess:()=>{
                clearSession()
                window.location.reload()
            }
        }
    })

    return (
        <UserContext.Provider value={{ status, jwt, address, disconnect, connectWalletGQL, logout }}>
            {children}
        </UserContext.Provider>
    )
}

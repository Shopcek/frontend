import { createContext, useContext, useEffect, useState } from 'react'

import * as mutations from './mutations'
import * as queries from './queries'

import { useQuery, useMutation, useLazyQuery } from 'lib/query-wrapper'

import { UserProvider, useUser } from 'context/user'
import { useAccount } from 'wagmi'

export const CartContext = createContext<{
    cartGQL?: any
    cartId?: string
}>({})

export function useCart() {
    return useContext(CartContext)
}
export function CartProvider({ children }: { children: any }) {
    function Component() {
        const { status, logout } = useUser()
        const cartGQL = useLazyQuery(queries.cart)
        const [cartId, setCartId] = useState(localStorage.getItem('cartId') || undefined)

        function defineCartId(value: string) {
            setCartId(value)
            localStorage.setItem('cartId', value)
        }

        useEffect(() => {
            const variables = cartId ? { id: cartId } : {}
            cartGQL.fn!({
                variables
            })
        }, [])

        useEffect(() => {
            if (status !== 'disconnected') {
                return
            }

            if (!cartGQL.called) {
                return
            }

            if (cartGQL.loading) {
                return
            }

            if (cartGQL.error) {
                console.log(cartGQL.error)
                return
            }

            console.log(logout)
            if (logout){
                return
            }

            defineCartId(cartGQL.data.id)
        }, [cartGQL.loading, cartGQL.called])

        return <CartContext.Provider value={{ cartGQL, cartId }}>{children}</CartContext.Provider>
    }

    return (
        <UserProvider>
            <Component />
        </UserProvider>
    )
}

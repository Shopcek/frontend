import { createContext, useContext, useEffect, useState } from 'react'
import * as queries from './queries'
import { useLazyQuery } from 'lib/query-wrapper'
import { UserProvider, useUser } from 'context/user'

import type { cart } from './types'

export const CartContext = createContext<{
    cartGQL?: ReturnType<typeof useLazyQuery<cart>>
    cartId?: string
}>({})

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }: { children: any }) {
    function Component() {
        const { status, logout } = useUser()
        const [cartId, setCartId] = useState(localStorage.getItem('cartId') || undefined)
        const cartGQL = useLazyQuery<cart>(queries.cart, {
            variables: {
                id: cartId
            }
        })

        function defineCartId(value: string) {
            setCartId(value)
            localStorage.setItem('cartId', value)
        }

        useEffect(() => {
            const variables = { id: cartId } 
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
                return
            }

            if (logout) {
                return
            }

            defineCartId(cartGQL.data!.id)
        }, [cartGQL.loading, cartGQL.called])
        return <CartContext.Provider value={{ cartGQL, cartId }}>{children}</CartContext.Provider>
    }

    return (
        <UserProvider>
            <Component />
        </UserProvider>
    )
}

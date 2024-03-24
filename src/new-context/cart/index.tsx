import { createContext, useContext, useEffect, useState } from 'react'

import * as mutations from './mutations'
import * as queries from './queries'

import { useQuery, useMutation, useLazyQuery } from 'lib/query-wrapper'

import type { cartType } from './types'
import { isString } from 'lodash'

export const CartContext = createContext<{
    cart?: cartType
    cartGQL?: any
    cartId?: string
}>({})

export function useCartContext() {
    return useContext(CartContext)
}
export function CartContextProvider({ children }: { children: any }) {
    // cart ID
    const cartIdGQL = useLazyQuery(queries.cartId)
    const [cartId, setCartId] = useState<string | null>(localStorage.getItem('cartId'))
    useEffect(() => {
        if (!cartId) {
            cartIdGQL.fn!({})
        }
    }, [cartId])

    useEffect(() => {
        if (cartIdGQL.data && !cartIdGQL.loading && cartIdGQL.called) {
            setCartId(cartIdGQL.data)
            localStorage.setItem('cartId', cartIdGQL.data)
        }
    }, [cartIdGQL.called, cartIdGQL.loading])

    // shopping cart
    const cartGQL = useLazyQuery(queries.cart)
    const localCart = localStorage.getItem('cart')
    const [cart, setCart] = useState<cartType | string | null>(isString(localCart) ? JSON.parse(localCart) : localCart)

    useEffect(() => {
        if (cartId) {
            cartGQL.fn!({
                variables: {
                    id: cartId
                }
            })
        }
    }, [cartId])

    // if cart set to localstorage
    useEffect(() => {
        if (cartGQL.data && !cartGQL.loading && cartGQL.called) {
            setCart(cartGQL.data)
            localStorage.setItem('cart', JSON.stringify(cartGQL.data))
        }
    }, [cartGQL.called, cartGQL.loading])

    console.log(cart, cartId)

    return <CartContext.Provider value={{ cart: cart as cartType, cartId: cartId as string, cartGQL }}>{children}</CartContext.Provider>
}

export function TestComponent() {
    return <div></div>
}

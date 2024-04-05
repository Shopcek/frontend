import { createContext, useContext, useEffect, useState } from 'react'
import * as mutations from './mutations'
import { useMutation } from '../../lib/query-wrapper'
import { useUser } from '../user'
import { useCart, CartProvider } from '../cart'
import type { operation } from './types'

export const CartOperationsContext = createContext<{
    addItemGQL?: ReturnType<typeof useMutation<operation>>
    deleteItemGQL?: ReturnType<typeof useMutation<operation>>
    updateCountGQL?: ReturnType<typeof useMutation<operation>>
    emptyCartGQL?: ReturnType<typeof useMutation<operation>>
}>({})

export function useCartOperations() {
    return useContext(CartOperationsContext)
}

export function CartOperationsProvider({ children }: { children: any }) {
    function Component() {
        const { cartId } = useCart()

        // resolvers
        const addItemGQL = useMutation<operation>(mutations.addItem)
        const deleteItemGQL = useMutation<operation>(mutations.deleteItem)
        const updateCountGQL = useMutation<operation>(mutations.updateCount)
        const emptyCartGQL = useMutation<operation>(mutations.emptyCart)

        return (
            <CartOperationsContext.Provider value={{ addItemGQL, deleteItemGQL, updateCountGQL, emptyCartGQL }}>
                {children}
            </CartOperationsContext.Provider>
        )
    }

    return (
        <CartProvider>
            <Component />
        </CartProvider>
    )
}

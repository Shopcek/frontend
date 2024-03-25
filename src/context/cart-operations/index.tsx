import { createContext, useContext, useEffect, useState } from 'react'
import * as mutations from './mutations'
import { useMutation } from 'lib/query-wrapper'
import { useUser } from 'context/user'
import { useCart, CartProvider } from 'context/cart'
import type { operation } from './types'

export const CartOperationsContext = createContext<{
    addItemGQL?: ReturnType<typeof useMutation<operation>>
    deleteItemGQL?: ReturnType<typeof useMutation<operation>>
    updateCountGQL?: ReturnType<typeof useMutation<operation>>
    emptyCartGQL?: ReturnType<typeof useMutation<operation>>
    addItem?: any
}>({})

export function useCartOperations() {
    return useContext(CartOperationsContext)
}

function addItem({
    addItemGQL,
    cartId,
    setVariantId
}: {
    addItemGQL: ReturnType<typeof useMutation<operation>>
    cartId: number | string
    setVariantId: CallableFunction
}) {
    return ({ variantId }: { variantId: number }) => {
        setVariantId(variantId)
        addItemGQL.fn({
            variables: { variantId, cartId }
        })
    }
}

export function CartOperationsProvider({ children }: { children: any }) {
    function Component() {
        const { cartId } = useCart()

        // resolvers
        const addItemGQL = useMutation<operation>(mutations.addItem)
        const deleteItemGQL = useMutation<operation>(mutations.deleteItem)
        const updateCountGQL = useMutation<operation>(mutations.updateCount)
        const emptyCartGQL = useMutation<operation>(mutations.emptyCart)

        function addItem({ variantId, count }: { variantId: number; count: number }) {
            addItemGQL.fn({
                variables: { variantId, cartId, count }
            })
            // cartGQL?.refetch()
        }

        return (
            <CartOperationsContext.Provider value={{ addItemGQL, deleteItemGQL, updateCountGQL, emptyCartGQL, addItem }}>
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

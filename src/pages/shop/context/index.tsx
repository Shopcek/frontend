import { createContext, useContext } from 'react'
import * as mutations from './mutations'

import { useMutation } from 'lib/query-wrapper'

export const OrderContex = createContext<{
    placeOrderGQL?: ReturnType<typeof useMutation<any>>
}>({})

export function useOrder() {
    return useContext(OrderContex)
}

export function OrderProvider({ children }: { children: any }) {
    const placeOrderGQL = useMutation<any>(mutations.placeOrder)

    return <OrderContex.Provider value={{ placeOrderGQL }}>{children}</OrderContex.Provider>
}

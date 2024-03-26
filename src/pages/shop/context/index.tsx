import { createContext, useContext } from 'react'
import * as mutations from './mutations'
import * as queries from './queries'

import { useMutation, useQuery } from 'lib/query-wrapper'

export const OrderContex = createContext<{
    placeOrderGQL?: ReturnType<typeof useMutation<any>>,
    orderGQL?: ReturnType<typeof useQuery<any>>,

}>({})

export function useOrder() {
    return useContext(OrderContex)
}

export function OrderProvider({ children }: { children: any }) {
    const placeOrderGQL = useMutation<any>(mutations.placeOrder)
    const orderGQL = useQuery<any>(queries.order)

    return <OrderContex.Provider value={{ placeOrderGQL, orderGQL }}>{children}</OrderContex.Provider>
}

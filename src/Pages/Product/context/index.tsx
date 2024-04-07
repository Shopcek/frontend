import { createContext, useContext, useEffect, useState } from 'react'

import * as queries from './queries'
import { useLazyQuery } from 'lib/query-wrapper'


import type { Product, Option } from './types'

//@ts-ignore
export const ProductContext = createContext<{
    productGQL: ReturnType<typeof useLazyQuery<Product>>
    color: [Option | undefined, Function]
}>()

export function useProduct() {
    return useContext(ProductContext)
}

export function ProductProvider({ children }: { children: any }) {
    function productNotFound(data: any) {
        return !data.product
    }
    const productGQL = useLazyQuery<Product>(queries.product, {
        nextFetchPolicy: 'no-cache',
        fetchPolicy: 'no-cache'
    }, productNotFound)

    const [color, setColor] = useState<Option>()

    return <ProductContext.Provider value={{ productGQL, color: [color, setColor] }}>{children}</ProductContext.Provider>
}

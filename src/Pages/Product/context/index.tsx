import { createContext, useContext, useEffect, useState } from 'react'

import * as queries from './queries'
import { useLazyQuery } from 'lib/query-wrapper'

import type { Product } from './types'

export const ProductContext = createContext<{
    productGQL?: ReturnType<typeof useLazyQuery<Product>>
}>({})

export function useProduct() {
    return useContext(ProductContext)
}

export function ProductProvider({ children }: { children: any }) {
    const productGQL = useLazyQuery<Product>(queries.product, {
        // fetchPolicy: 'no-cache'
    })

    return <ProductContext.Provider value={{ productGQL }}>{children}</ProductContext.Provider>
}

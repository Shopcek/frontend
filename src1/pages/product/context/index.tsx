import { createContext, useContext, useEffect, useState } from 'react'

import * as queries from './queries'
import { useLazyQuery } from '../../../lib/query-wrapper'

import type { Product } from './types'

export const ProductContext = createContext<{
    productGQL?: ReturnType<typeof useLazyQuery<Product>>
}>({})

export function useProduct() {
    return useContext(ProductContext)
}

export function ProductProvider({ children }: { children: any }) {
    function productNotFound(data: any) {
        return !data.product
    }
    const productGQL = useLazyQuery<Product>(queries.product, {}, productNotFound)

    return <ProductContext.Provider value={{ productGQL }}>{children}</ProductContext.Provider>
}

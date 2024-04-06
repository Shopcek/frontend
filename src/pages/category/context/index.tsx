import { createContext, useContext, useEffect, useState } from "react";

import type { products } from "./types";

import { useLazyQuery } from "lib/query-wrapper";
import * as queries from './queries'

//@ts-ignore
const Context = createContext<{
    productsGQL: ReturnType<typeof useLazyQuery<products>>
}>()


export function useProduct(){
    return useContext(Context)
}


export function ProductProvider({children}: {children:any}){
    const productsGQL = useLazyQuery<products>(queries.products, {
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'no-cache'
    }, (data:any)=>{
        return !data.category.products
    })

    return <Context.Provider value={{productsGQL}}>
        {children}
    </Context.Provider>
}
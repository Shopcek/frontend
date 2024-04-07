import { createContext, useContext, useState, useEffect } from 'react'

import * as queries from './queries'

import { useLazyQuery } from 'lib/query-wrapper'

//@ts-ignore
const Context = createContext<{ searchGQL: ReturnType<typeof useLazyQuery<any>> }>()

export function useSearch() {
    return useContext(Context)
}

export function SearchProvider({ children }: { children: any }) {
    const searchGQL = useLazyQuery(queries.search, {
        nextFetchPolicy: 'no-cache',
        fetchPolicy: 'no-cache'
    })

    return <Context.Provider value={{searchGQL}}>{children}</Context.Provider>
}

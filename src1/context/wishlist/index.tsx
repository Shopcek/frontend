import { createContext, useContext, useState, useEffect } from 'react'

import { UserProvider, useUser } from '../user'

import * as queries from './queries'
import * as mutations from './mutations'

import { useLazyQuery, useMutation } from '../../lib/query-wrapper'

//@ts-ignore
export const WishlistContext = createContext<{
    addToWishlistGQL: ReturnType<typeof useMutation<any>>
    removeFromWishlistGQL: ReturnType<typeof useMutation<any>>
    userWishlistGQL: ReturnType<typeof useLazyQuery<any>>
}>()

export function useWishlist() {
    return useContext(WishlistContext)
}

export function WishlistProvider({ children }: { children: any }) {
    function Component() {
        const {} = useUser()

        const addToWishlistGQL = useMutation<any>(mutations.addToWishlist)
        const removeFromWishlistGQL = useMutation<any>(mutations.removeFromWishlist)
        const userWishlistGQL = useLazyQuery<any>(queries.userWishlist)

        return (
            <WishlistContext.Provider
                value={{
                    addToWishlistGQL,
                    removeFromWishlistGQL,
                    userWishlistGQL
                }}
            >
                {children}
            </WishlistContext.Provider>
        )
    }

    return (
        <UserProvider>
            <Component></Component>
        </UserProvider>
    )
}

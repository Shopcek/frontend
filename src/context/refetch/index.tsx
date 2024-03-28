import { createContext, useContext, useState, useEffect } from 'react'
import { useLazyQuery } from 'lib/query-wrapper'

import * as queries from './queries'


type refetch = {
    refetch: CallableFunction,
    refetched: boolean
}

//@ts-ignore
export const RefetchContext = createContext<{
    wishlist:refetch
    cart:refetch
}>()


export function useRefetch(){
    return useContext(RefetchContext)
}

export function refetch(state: any, setState: CallableFunction) {
    return () => {
        setState(!state)
    }
}

export function RefetchProvider({ children }: { children: any }) {
    //cart
    const [cart, setCart] = useState(false)
    const [cartRefetch, setCartRefetch] = useState(false)
    const cartGQL = useLazyQuery(queries.cart.cart)
    useEffect(() => {
        cartGQL.refetch().then((data: any)=>{
            setCartRefetch(!cartRefetch)
        })
    }, [cart])

    //wishlist
    const [wishlist, setWishlist] = useState(false)
    const [wishlistRefetch, setWishlistRefetch] = useState(false)
    const wishlistGQL = useLazyQuery(queries.wishlist.userWishlist)
    useEffect(() => {
        wishlistGQL.refetch().then((data: any)=>{
            setWishlistRefetch(!wishlistRefetch)
        })
    }, [wishlist])

    return (
        <RefetchContext.Provider
            value={{
                cart: {
                    refetch: refetch(cart, setCart),
                    refetched: cartRefetch
                },
                wishlist: {
                    refetch: refetch(wishlist, setWishlist),
                    refetched: wishlistRefetch     
                }
            }}
        >
            {children}
        </RefetchContext.Provider>
    )
}

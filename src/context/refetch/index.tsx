import { createContext, useContext, useState, useEffect } from 'react'
import { useLazyQuery } from 'lib/query-wrapper'

import * as queries from './queries'

type refetch = {
    refetch: CallableFunction
    refetched: boolean
}

//@ts-ignore
export const RefetchContext = createContext<{
    wishlist: refetch
    cart: refetch
    xp: refetch
    recipient: refetch
    choosen: refetch
    domains: refetch
    order: refetch
}>()

export function useRefetch() {
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
        cartGQL.refetch().then((data: any) => {
            setCartRefetch(!cartRefetch)
        })
    }, [cart])

    //wishlist
    const [wishlist, setWishlist] = useState(false)
    const [wishlistRefetch, setWishlistRefetch] = useState(false)
    const wishlistGQL = useLazyQuery(queries.wishlist.userWishlist)
    useEffect(() => {
        wishlistGQL.refetch().then((data: any) => {
            setWishlistRefetch(!wishlistRefetch)
        })
    }, [wishlist])

    //xp
    const [xp, setXp] = useState(false)
    const [xpRefetch, setXpRefetch] = useState(false)
    const xpGQL = useLazyQuery(queries.earn.xp)
    useEffect(() => {
        xpGQL.refetch().then((data: any) => {
            setXpRefetch(!xpRefetch)
        })
    }, [xp])

    //recipient
    const [recipient, setRecipient] = useState(false)
    const [recipientRefetch, setRecipientRefetch] = useState(false)
    const recipientGQL = useLazyQuery(queries.user.recipient)
    useEffect(() => {
        recipientGQL.refetch().then((data: any) => {
            setRecipientRefetch(!recipientRefetch)
        })
    }, [recipient])

    //choosen
    const [choosen, setChoosen] = useState(false)
    const [choosenRefetch, setChoosenRefetch] = useState(false)
    const choosenGQL = useLazyQuery(queries.earn.choosen)
    useEffect(() => {
        choosenGQL.refetch().then((data: any) => {
            setChoosenRefetch(!choosenRefetch)
        })
    }, [choosen])


    //domains
    const [domains, setDomains] = useState(false)
    const [domainsRefetch, setDomainsRefetch] = useState(false)
    const domainsGQL = useLazyQuery(queries.earn.userDomains)
    useEffect(() => {
        domainsGQL.refetch().then((data: any) => {
            setDomainsRefetch(!domainsRefetch)
        })
    }, [domains])


    //domains
    const [orders, setOrders] = useState(false)
    const [ordersRefetch, setOrdersRefetch] = useState(false)
    const ordersGQL = useLazyQuery(queries.user.userOrders)
    useEffect(() => {
        ordersGQL.refetch().then((data: any) => {
            setOrdersRefetch(!ordersRefetch)
        })
    }, [orders])
    


    return (
        <RefetchContext.Provider
            value={{
                order: {
                    refetch: refetch(orders, setOrders),
                    refetched: ordersRefetch
                },

                cart: {
                    refetch: refetch(cart, setCart),
                    refetched: cartRefetch
                },
                wishlist: {
                    refetch: refetch(wishlist, setWishlist),
                    refetched: wishlistRefetch
                },
                xp: {
                    refetch: refetch(xp, setXp),
                    refetched: xpRefetch
                },
                recipient: {
                    refetch: refetch(recipient, setRecipient),
                    refetched: recipientRefetch
                },
                choosen: {
                    refetch: refetch(choosen, setChoosen),
                    refetched: choosenRefetch
                },
                domains: {
                    refetch: refetch(domains, setDomains),
                    refetched: domainsRefetch
                },
            }}
        >
            {children}
        </RefetchContext.Provider>
    )
}

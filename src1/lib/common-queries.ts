import { gql } from '@apollo/client'

export let cartQuery = gql`
    query {
        cart {
            product {
                name
                price
                slug
                image
            }
            count
            options
        }
    }
`

export let addItemToCart = gql`
    mutation ($slug: String!, $options: JSON!, $count: Int) {
        addProductToCart(slug: $slug, count: $count, options: $options)
    }
`

export let deleteItemFromCart = gql`
    mutation DELETE_PRODUCT_FROM_CART($slug: String!, $options: JSON!, $deleteAll: Boolean) {
        deleteProductFromCart(slug: $slug, options: $options, deleteAll: $deleteAll)
    }
`

export let getProductsByCategorySlug = gql`
    query CATEGORY_BY_SLUG($slug: String!, $start: Int, $limit: Int) {
        categoryBySlug(slug: $slug, start: $start, limit: $limit) {
            category {
                name
            }
            products {
                id
                price
                name
                slug
                images {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                variants {
                    options {
                        value
                    }
                    name
                }
            }
            variants
        }
    }
`

export let register = gql`
    mutation REGISTER($password: String!, $username: String!, $email: String!) {
        register(input: { password: $password, username: $username, email: $email }) {
            jwt
        }
    }
`

export let login = gql`
    mutation LOGIN($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
            jwt
        }
    }
`

export let products = gql`
    query {
        products {
            data {
                attributes {
                    name
                    slug
                    image
                    price
                }
            }
        }
    }
`

export const getSingleProductBySlug = gql`
    query GET_PRODUCT($slug: String!) {
        productBySlug(slug: $slug) {
            name
            slug
            price
            description
            image
            variants
            size
            color
            categories {
                data {
                    attributes {
                        name
                        slug
                    }
                }
            }
        }
    }
`

export let loginWithWallet = gql`
    mutation LOGIN_WITH_WALLET($walletAddress: String!) {
        loginWithWallet(walletAddress: $walletAddress) {
            jwt
        }
    }
`

export let registerWithWallet = gql`
    mutation REGISTER_WITH_WALLET($walletAddress: String!) {
        registerWithWallet(walletAddress: $walletAddress) {
            jwt
        }
    }
`

export let addManyProductToCart = gql`
    mutation ($items: [JSON!]!) {
        addManyCart(items: $items)
    }
`

export let addWishList = gql`
    mutation ($slug: String!) {
        addWishlist(slug: $slug)
    }
`

export let deleteWishlist = gql`
    mutation ($slug: String!) {
        deleteWishlist(slug: $slug)
    }
`

export let wishlist = gql`
    query {
        wishlist {
            name
            slug
            price
            image
        }
    }
`

export let recipient = gql`
    query {
        recipient
    }
`

export let updateRecipient = gql`
    mutation ($recipient: JSON!) {
        updateRecipient(recipient: $recipient)
    }
`

export let orders = gql`
    query {
        printfulOrdersByUser
    }
`

export let newOrder = gql`
    mutation ($transaction: String!, $recipient: JSON) {
        newPrintfulOrder(transaction: $transaction, recipient: $recipient)
    }
`

export let order = gql`
    query ($id: ID!) {
        printfulOrderWithProducts(id: $id)
    }
`

export let me = gql`
    query {
        me {
            username
            email
        }
    }
`

export let xp = gql`
    query {
        xp
    }
`

export let addXp = gql`
    mutation ADD_XP($point: Int!) {
        addXp(point: $point)
    }
`

export let spin = gql`
    mutation spin($point: Int!) {
        spin(point: $point)
    }
`

export let loginStreak = gql`
    mutation loginStreak($point: Int!) {
        loginStreak(point: $point)
    }
`

export let loginData = gql`
    query {
        loginData
    }
`

export let spinData = gql`
    query {
        spinData
    }
`

export let checkDomain = gql`
    query checkDomain($domain: String!) {
        checkDomain(domain: $domain)
    }
`

export let addNewDomainToUser = gql`
    mutation addNewDomainToUser($domain: String!) {
        addNewDomainToUser(domain: $domain)
    }
`

export let getDomainsByUser = gql`
    query {
        getDomainsByUser
    }
`

export let chooseDomain = gql`
    mutation chooseDomain($domain: String!) {
        chooseDomain(domain: $domain)
    }
`
export let connectWallet = gql`
    mutation connectWallet($walletAddress: String!) {
        connectWallet(walletAddress: $walletAddress) {
            jwt
        }
    }
`

export let choosenDomain = gql`
    query choosenDomain {
        choosenDomain
    }
`

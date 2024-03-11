import { gql } from '@apollo/client'

export let cartQuery = gql`
    query {
        cart {
            product {
                name
                price
                slug
                images {
                    data {
                        attributes {
                            url
                        }
                    }
                }
            }
            count
        }
    }
`

export let addItemToCart = gql`
    mutation ($slug: String!) {
        addProductToCart(slug: $slug)
    }
`

export let deleteItemFromCart = gql`
    mutation DELETE_PRODUCT_FROM_CART($slug: String!) {
        deleteProductFromCart(slug: $slug)
    }
`

export let getProductsByCategorySlug = gql`
    query CATEGORY_BY_SLUG($slug: String!, $start: Int, $limit: Int) {
        categoryBySlug(slug: $slug, start: $start, limit: $limit) {
            category {
                name
            }
            products {
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

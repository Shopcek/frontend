import { gql } from "@apollo/client";

export const addToWishlist = gql`
    mutation ($slug: String!){
        addToWishlist(slug: $slug)
    }
`

export const removeFromWishlist = gql`
    mutation ($slug: String!){
        removeFromWishlist(slug: $slug)
    }
`
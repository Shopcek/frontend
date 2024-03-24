import { gql } from '@apollo/client'

export const addItem = gql`
    mutation addItem($variantId: ID!, $cartId: ID ){
        cart(operation: "add", cartId: $cartId, input: { variantId: $variantId })
    }
`

export const deleteItem = gql`
    mutation delete($itemId: ID!, $cartId: ID ){
        cart(operation: "delete", cartId: $cartId, input: { itemId: $itemId })
    }
`

export const emptyCart = gql`
    mutation empty( $cartId: ID ){
        cart(operation: "empty", cartId: $cartId)
}`

export const updateCount = gql`
    mutation update( $itemId: ID!, $count: Int!, $cartId: ID){
        cart(operation: "update", cartId: $cartId, input: { itemId: $itemId, count: $count })
}`
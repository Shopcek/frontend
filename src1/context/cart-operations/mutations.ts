import { gql } from '@apollo/client'

export const addItem = gql`
    mutation addItem($variantId: ID!, $count: Int!, $cartId: ID) {
        cart(operation: "add", cartId: $cartId, input: { variantId: $variantId, count: $count }) {
            id
            status
        }
    }
`

export const deleteItem = gql`
    mutation delete($itemId: ID!, $cartId: ID) {
        cart(operation: "delete", cartId: $cartId, input: { itemId: $itemId }) {
            status
        }
    }
`

export const emptyCart = gql`
    mutation empty($cartId: ID) {
        cart(operation: "empty", cartId: $cartId) {
            status
        }
    }
`

export const updateCount = gql`
    mutation update($itemId: ID!, $count: Int!, $cartId: ID) {
        cart(operation: "update", cartId: $cartId, input: { itemId: $itemId, count: $count }) {
            status
        }
    }
`

import { gql } from '@apollo/client'

export const placeOrder = gql`
    mutation ($transaction: String!) {
        placeOrder(transaction: $transaction)
    }
`

import { gql } from '@apollo/client'

export const userOrders = gql`
    query {
        userOrders {
            id
            count
            price
            createdAt
            error
        }
    }
`

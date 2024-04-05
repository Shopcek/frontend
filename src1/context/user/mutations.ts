import { gql } from '@apollo/client'

export const connectWallet = gql`
    mutation ($address: String!, $cartId: ID!) {
        connectWallet(address: $address, cartId: $cartId)
    }
`

export const startSession = gql`
    mutation {
        startSessionTime
    }
`

export const recipient = gql`
    mutation ($recipient: JSON!) {
        recipientByUser(recipient: $recipient)
    }
`

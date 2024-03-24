import { gql } from '@apollo/client'

export const connectWallet = gql`
    mutation ($address: String!) {
        connectWallet(address: $address)
    }
`

import { gql } from "@apollo/client";

export const claim = gql`
    mutation ($service:String!){
        claim(service: $service)
    }
`

export const startSession = gql`
    mutation {
        startSession
    }
`


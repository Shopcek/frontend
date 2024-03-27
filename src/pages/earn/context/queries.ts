import { gql } from "@apollo/client";

export const streak = gql`
    query ($service:String!){
        streak(service: $service)
    }
`


export const lastClaim = gql`
    query ($service:String!){
        lastClaim(service: $service)
    }
`
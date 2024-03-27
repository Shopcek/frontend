import { gql } from '@apollo/client'

export const streak = gql`
    query ($service: String!) {
        streak(service: $service)
    }
`

export const lastClaim = gql`
    query ($service: String!) {
        lastClaim(service: $service)
    }
`

export const xp = gql`
    query {
        xp
    }
`

export const loginRewards = gql`
    query {
        loginReward {
            data {
                attributes {
                    rewards {
                        data {
                            attributes {
                                name
                                reward
                            }
                        }
                    }
                }
            }
        }
    }
`

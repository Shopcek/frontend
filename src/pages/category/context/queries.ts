import { gql } from '@apollo/client'

export const products = gql`
    query ($slug: String!) {
        category(slug: $slug) {
            products {
                name
                image
                price
                slug
            }

            category {
                name
                type
            }
        }
    }
`



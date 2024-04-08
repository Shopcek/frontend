import { gql } from "@apollo/client";

export const search = gql`
    query ($name: String!){
        search(name: $name) {
            name
            slug
            image
            price
        }
    }
`
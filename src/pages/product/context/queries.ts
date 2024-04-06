import { gql } from '@apollo/client'

export const product = gql`
    query ($slug: String!) {
        product(slug: $slug) {
            variants {
                color {
                    data {
                        attributes {
                            value
                            hex
                        }
                    }
                }
                size {
                    data {
                        attributes {
                            value
                        }
                    }
                }
                image
            }
            product {
                slug
                colors {
                    data {
                        attributes {
                            value
                            hex
                        }
                    }
                }
                sizes {
                    data {
                        attributes {
                            value
                        }
                    }
                }
                image
                description
                price
                name
            }
        }
    }
`

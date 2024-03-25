import { gql } from '@apollo/client'

export const product = gql`
    query ($slug: String!) {
        product(slug: $slug) {
            variants {
                data {
                    id
                    attributes {
                        color {
                            data {
                                attributes {
                                    value
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
                }
            }
            colors {
                data {
                    attributes {
                        value
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
        }
    }
`

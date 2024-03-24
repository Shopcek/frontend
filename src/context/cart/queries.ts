import { gql } from '@apollo/client'

export const cartId = gql`
    query {
        cartId
    }
`

export const cart = gql`
    query getCart($id: ID) {
        cart(id: $id) {
            id
            items {
                data {
                    id
                    attributes {
                        variant {
                            data {
                                id
                                attributes {
                                    product {
                                        data {
                                              
                                            attributes {
                                                name
                                                price
                                                slug
                                                image
                                                sizes {
                                                    data {
                                                        attributes {
                                                            value
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
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

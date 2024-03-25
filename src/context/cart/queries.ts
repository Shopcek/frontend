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
            count
            items {
                data {
                    id
                    attributes {
                        count
                        variant {
                            data {
                                id
                                attributes {
                                    price
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

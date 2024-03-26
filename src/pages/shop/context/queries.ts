import { gql } from '@apollo/client'

export const order = gql`
    query ($id: ID!){
        order(id: $id) {
            data {
                id
                attributes {
                    transaction
                    cart {
                        data {
                            attributes {
                                count
                                price
                                items {
                                    data {
                                        attributes {
                                            totalPrice
                                            variant {
                                                data {
                                                    attributes {
                                                        image
                                                        product {
                                                            data {
                                                                attributes {
                                                                    name
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
                                                        color {
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
                    printful_order {
                        data {
                            attributes {
                                error
                            }
                        }
                    }
                }
            }
        }
    }
`

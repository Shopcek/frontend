import { gql } from '@apollo/client'

export const order = gql`
    query ($id: ID!) {
        order(id: $id) {
            data {
                id
                attributes {
                    transaction
                    createdAt
                    recipient {
                        data {
                            attributes {
                                name
                                company
                                country_code
                                address1
                                address2
                                zip
                                phone
                                email
                                tax_number
                                city
                                country_name
                                state_code
                                state_name
                            }
                        }
                    }
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
                                                                    slug
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

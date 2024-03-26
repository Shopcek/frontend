export type cart = {
    id
    price
    items: {
        id
        count
        variant: {
            id
            product: {
                colors: {
                    value: string
                }[]
                size: {
                    value: string
                }[]
                price: number
                name: string
                slug: string
                image: string
            }
        }[]
    }[]
}

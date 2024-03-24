export type cartType = {
    items: {
        variant: {
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
    }
}
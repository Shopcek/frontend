export type Option = {
    value: string
    hex?: string
}

export type Product = {
    product: {
        video: {
            url: string,
            previewUrl: string
        }
        categories: {
            name
            slug
        }[]
        slug: string
        name: string
        price: number
        image: string
        sizes: Option[]
        colors: Option[]
    }
    variants: {
        id: string
        variant:  {
            image: string
            size: Option
            color: Option
        }
    }[]
}

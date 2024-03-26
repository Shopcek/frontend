export type Option = {
    value: string
}

export type Product = {
    slug: string
    name: string
    price: number
    image: string
    sizes: Option[]
    colors: Option[]
    variants: {
        id: string
        image: string
        size: Option
        color: Option
    }[]
}

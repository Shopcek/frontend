import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Telegram, Medium, Facebook, Instagram, Linkedin, Twitter } from '../../components/images/BlueSocial'
import type { Product, Option } from './context/types'
import { Variant, AddToCart, Colors } from './add-to-cart'
import { WishlistProvider, useWishlist } from '../../context/wishlist'
import { useUser } from '../../context/user'

import { useRefetch } from '../../context/refetch'

export function Information(props: { icon?: string; className?: string }) {
    const { icon } = props

    return (
        <div className={`information ${props.className}`}>
            <i className={icon ? icon : ''}></i>
            <p>
                <b>6</b> People watching this product now!
            </p>
        </div>
    )
}

export function Sold(props: { icon?: string; className?: string }) {
    const { icon } = props

    return (
        <div className={`sold ${props.className}`}>
            <i className={icon ? icon : ''}></i>
            <p>
                <b>4</b> Item sold in last 24 hours!
            </p>
        </div>
    )
}

export function Socials() {
    return (
        <div className="socials">
            <p>Share:</p>

            <Link to="/">
                <Twitter className="social-icon" />
            </Link>
            <Link to="/">
                <Instagram className="social-icon" />
            </Link>
            <Link to="/">
                <Linkedin className="social-icon" />
            </Link>
            <Link to="/">
                <Medium className="social-icon" />
            </Link>
            <Link to="/">
                <Telegram className="social-icon" />
            </Link>
            <Link to="/">
                <Facebook className="social-icon" />
            </Link>
        </div>
    )
}

export function Categories(props: { categories: any[] }) {
    const { categories } = props

    return (
        <div className="categories">
            <p>Categories:</p>
            {categories.map((item: any, index: number) => {
                return <Link to={`/category/${item.slug}`}>{' ' + item.name + ','}</Link>
            })}
        </div>
    )
}

export function ProductInfo(props: { price: string; name: string }) {
    const { name, price } = props

    return [<span className="lh-base mb-1 info">{name}</span>, <h5 className="text-primary info">${price}</h5>]
}

export function AddToWishList({ slug }: { slug: string }) {
    function Component() {
        const iconFill = <i className="bi bi-heart-fill"></i>
        const icon = <i className="bi bi-heart"></i>

        const { userWishlistGQL, addToWishlistGQL, removeFromWishlistGQL } = useWishlist()
        const { status } = useUser()
        const { wishlist } = useRefetch()

        useEffect(() => {
            switch (status) {
                case 'connected': {
                    userWishlistGQL.fn()
                    break
                }
            }
        }, [status, wishlist.refetched])

        const [In, setIn] = useState(false)
        useEffect(() => {
            switch (userWishlistGQL.status) {
                case 'success': {
                    const item = userWishlistGQL.data.items.find((item: any) => {
                        return slug === item.slug
                    })

                    setIn(!!item)
                }
            }
        }, [userWishlistGQL.status, wishlist.refetched])

        return (
            <div
                className="wishlist btn-hover"
                onClick={() => {
                    if (!In) {
                        addToWishlistGQL
                            .fn({
                                variables: {
                                    slug
                                }
                            })
                            .then((data: any) => {
                                wishlist.refetch()
                            })
                    } else {
                        removeFromWishlistGQL
                            .fn({
                                variables: {
                                    slug
                                }
                            })
                            .then((data: any) => {
                                wishlist.refetch()
                            })
                    }
                }}
            >
                {In ? iconFill : icon}
                <p>Add to wishlist!</p>
            </div>
        )
    }

    return (
        <WishlistProvider>
            <Component></Component>
        </WishlistProvider>
    )
}

export function Details({ data }: { data: Product }) {
    const [color, setColor] = useState<Option>()
    const [size, setSize] = useState<Option>()

    useEffect(() => {
        if (data.colors.length == 1) {
            setColor(data.colors[0])
        }
        if (data.sizes.length == 1) {
            setSize(data.sizes[0])
        }
    }, [])

    console.log(data.colors)

    return (
        <div className="product-details">
            <ProductInfo price={data.price.toFixed(2)} name={data.name} />

            <Sold icon="bi bi-fire" />
            {data.colors.length !== 1 ? <Colors colorsList={data.colors} setColor={setColor} /> : ''}

            {data.sizes.length !== 1 ? <Variant title="Choose an option" options={data.sizes} option={size} setOption={setSize} /> : ''}

            <Information icon="bi bi-eye" />
            <AddToCart color={color} size={size} variants={data.variants} />
            <hr />
            <AddToWishList slug={data.slug} />
            <Categories categories={[]} />
            <Socials />
        </div>
    )
}

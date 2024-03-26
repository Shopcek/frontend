import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Telegram, Medium, Facebook, Instagram, Linkedin, Twitter } from 'Components/Images/BlueSocial'
import type { Product, Option } from './context/types'

import { Variant, AddToCart, Colors } from './add-to-cart'

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

export function AddToWishList({ wishListOnClick, inList }: { wishListOnClick: any; inList: boolean }) {
    return (
        <div className="wishlist btn-hover" onClick={wishListOnClick}>
            <i className={`bi bi-heart${inList ? '-fill' : ''}`} />
            <p>Add to wishlist!</p>
        </div>
    )
}

export function Details({ data }: { data: Product }) {
    const [color, setColor] = useState<Option>()
    const [size, setSize] = useState<Option>()

    return (
        <div className="product-details">
            <ProductInfo price={data.price.toFixed(2)} name={data.name} />

            <Sold icon="bi bi-fire" />
            {data.colors.length !== 1 ? <Colors colorsList={data.colors} setColor={setColor} /> : ''}

            {data.sizes.length !== 1 ? <Variant title="Choose an option" options={data.sizes} option={size} setOption={setSize} /> : ''}

            <Information icon="bi bi-eye" />
            <AddToCart color={color} size={size} variants={data.variants} />
            <hr />
            <Categories categories={[]} />
            <Socials />
        </div>
    )
}

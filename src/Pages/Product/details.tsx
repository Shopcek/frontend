import { useState } from 'react'
import { Button, Form, Dropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { Telegram, Medium, Facebook, Instagram, Linkedin, Twitter } from 'Components/Images/BlueSocial'
import { colors } from 'data/colors'
import type { Product, Option } from './context/types'

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

export function AddToCart(props: {
    addItem: Function
    setCount: Function
    product: {
        count: number
        product: any
        options: {
            size: string | undefined
            color: string | undefined
        }
    }
}) {
    const { addItem, setCount, product } = props

    let { count, options } = product

    return (
        <div className="hstack gap-2 add-to-cart">
            <div className="input-step ms-2 operation">
                <Button className="minus" onClick={() => setCount(count - 1)}>
                    -
                </Button>
                <Form.Control type="number" className="product-quantity1" value={count > 0 ? count : 0} min={0} max={100} readOnly />
                <Button className="plus" onClick={() => setCount(count + 1)}>
                    +
                </Button>
            </div>

            <Button
                variant="primary"
                className="btn btn-hover w-100 operation"
                onClick={() => {
                    if (count >= 1 && options.size && options.color) {
                        addItem(product)
                    } else {
                    }
                }}
            >
                <div className="text">Add To Cart</div>
            </Button>
            <Button variant="secondary" className="btn btn-hover w-100 h-10 operation">
                <div className="text">Buy Now</div>
            </Button>
        </div>
    )
}

export function Colors({ colorsList, setColor }: { colorsList: Option[]; setColor: Function }) {
    return (
        <div className="colors">
            <div className="variant-title">Color :</div>
            <ul className="clothe-colors list-unstyled hstack gap-1 mb-0 flex-wrap ms-2">
                {colorsList.map((color) => {
                    return (
                        <li className="color">
                            <Form.Control
                                type="radio"
                                name="sizes"
                                id={color.value}
                                onClick={() => {
                                    setColor(color)
                                }}
                            />
                            <Form.Label
                                className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle"
                                htmlFor={color.value}
                                style={{
                                    backgroundColor: `${(colors as any)[color.value].value}`
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
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

export function Variant({ title, options, setOption, option }: { title: string; options: Option[]; option: Option | undefined; setOption: Function }) {
    return (
        <div className="dropdown">
            <div className="variant-title">Size :</div>
            <Dropdown>
                <Dropdown.Toggle variant="">
                    <div id="text">{option ? option!.value : title}</div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {options.map((option) => {
                        return (
                            <Dropdown.Item
                                key={option.value}
                                onClick={() => {
                                    setOption(option)
                                }}
                            >
                                <div id="text">{option.value}</div>
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
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

            <hr />
            <Categories categories={[]} />
            <Socials />
        </div>
    )
}

{
    /* <AddToCart
                                    addItem={addItem}
                                    setCount={setCount}
                                    product={{
                                        product: data,
                                        count,
                                        options: {
                                            size,
                                            color
                                        }
                                    }}
                                />
                                <AddToWishList
                                    wishListOnClick={() => {
                                        ;(inList ? deleteWishList : addWishList)(productData.slug)
                                        setInList(!inList)
                                    }}
                                    inList={inList}
                                /> */
}

import { Dropdown, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import type { Option } from './context/types'
import { colors } from 'data/colors'

import { useCartOperations, CartOperationsProvider } from 'context/cart-operations'
import { useProduct } from './context'
import { useCart } from 'context/cart'
import { useRefetch } from 'context/refetch'

import { PopupT } from 'components/popup'

import bagIcon from '../../assets/images/shopping-bag.png'
import { useCartModalContext } from 'components/modals/cart/context'

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
                                    backgroundColor: `${color.hex}`
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export function Variant({
    title,
    options,
    setOption,
    option
}: {
    title: string
    options: Option[]
    option: Option | undefined
    setOption: Function
}) {
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

export function AddToCart({ color, size, variants }: { color?: Option; size?: Option; variants: any[] }) {
    function Component() {
        const {openModal}  = useCartModalContext()
        
        const [count, setCount] = useState<number>(1)
        function updateCount(value: number) {
            if (value <= 0) {
                return
            }
            setCount(value)
        }

        const { cartId } = useCart()
        const { addItemGQL } = useCartOperations()
        const { cart } = useRefetch()

        let variant
        if (color && size) {
            console.log(variants)
            variant = variants.find((item) => {
                return item.variant.color.value === color.value && item.variant.size.value === size.value
            })
        }

        const [open, setOpen] = useState(false)
        useEffect(()=>{
            switch (addItemGQL?.status){
                case 'success': {
                    openModal()
                }
            }

        }, [addItemGQL?.status])

        return (
            <div className="hstack gap-2 add-to-cart">
                <div className="input-step ms-2 operation">
                    <Button className="minus" onClick={() => updateCount(count - 1)}>
                        -
                    </Button>
                    <Form.Control type="number" className="product-quantity1" value={count > 0 ? count : 0} min={0} max={100} readOnly />
                    <Button className="plus" onClick={() => updateCount(count + 1)}>
                        +
                    </Button>
                </div>

                <Button
                    variant="primary"
                    className="btn btn-hover w-100 operation"
                    onClick={() => {
                        console.log(cartId, variant!)
                        addItemGQL
                            ?.fn({
                                variables: { cartId, variantId: variant!.id, count }
                            })
                            .then((data: any) => {
                                cart.refetch()
                            })
                    }}
                    disabled={!variant || addItemGQL?.loading}
                >
                    <div className="text">Add To Cart</div>
                </Button>
                <Button variant="secondary" className="btn btn-hover w-100 h-10 operation" disabled={!variant}>
                    <div className="text">Buy Now</div>
                </Button>


                <PopupT open={open} handleClose={()=>{setOpen(false)}}>
                    <div className="added-to-cart">
                        <div className="info-text">
                            Item successfully added to cart.
                        </div>

                        <img className='bag' src={bagIcon} alt="" />
                    </div>
                </PopupT>
            </div>
        )
    }

    return (
        <CartOperationsProvider>
            <Component />
        </CartOperationsProvider>
    )
}

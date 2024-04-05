// import { useCart } from 'oldcontext/cart'
import { CartProvider, useCart } from '../../../context/cart'
import { useRefetch } from '../../../context/refetch'
import { useEffect, useState } from 'react'
import { Table, Image, Card } from 'react-bootstrap'

function Items({ items }: { items: any[] }) {
    return items.map((item: any, inx: number) => {
        return (
            <tr key={inx}>
                <td className="justify-center-center">
                    <div className="d-flex align-items-center gap-2">
                        <Image src={item.variant.product.image} alt="" className="cart-img" />
                        <h6>
                            {item.variant.product.name} x {item.count}
                        </h6>
                    </div>
                </td>
                <td className="justify-center-center">
                    <div className="d-flex align-items-center gap-2">
                        <Image src={item.variant.product.image} alt="" className="invisible" />
                        <h6>${(item.variant.price * item.count).toFixed(2)}</h6>
                    </div>
                </td>
            </tr>
        )
    })
}

function Prices({ price }: { price: number }) {
    return [
        <Table className="table-borderless mb-0 fs-15">
            <tbody>
                <tr className="table-active">
                    <th>Shipping</th>
                    <td className="text-end">
                        <span className="fw-semibold cart-total">${((price / 100) * 5).toFixed(2)}</span>
                    </td>
                </tr>
            </tbody>
        </Table>,

        <Table className="table-borderless mb-0 fs-15">
            <tbody>
                <tr className="table-active">
                    <th>Subtotal</th>
                    <td className="text-end">
                        <span className="fw-semibold cart-total">${price.toFixed(2)}</span>
                    </td>
                </tr>
            </tbody>
        </Table>,

        <hr />,

        <Table className="table-borderless mb-0 fs-15">
            <tbody>
                <tr className="table-active">
                    <th>
                        <h6>Total</h6>
                    </th>
                    <td className="text-end">
                        <span className="fw-semibold cart-total">${(price + (price / 100) * 5).toFixed(2)}</span>
                    </td>
                </tr>
            </tbody>
        </Table>
    ]
}

export function Products() {
    function Compnent() {
        const { cartGQL } = useCart()
        const { cart } = useRefetch()

        const [items, setItems] = useState<any>()
        const [prices, setPrices] = useState<any>()

        useEffect(() => {
            if (cartGQL) {
                switch (cartGQL?.status) {
                    case 'success': {
                        setItems(<Items items={cartGQL!.data!.items} />)
                        setPrices(<Prices price={cartGQL!.data!.price} />)
                    }
                }
            }
        }, [cartGQL?.status, cart.refetch])

        return (
            <Card>
                <Card.Body>
                    <div className="table-responsive table-card">
                        <Table className="table-borderless table-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>{items}</tbody>
                        </Table>
                        {prices}
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return (
        <CartProvider>
            <Compnent />
        </CartProvider>
    )
}

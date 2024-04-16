import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { CardComponent } from 'components/CardComponent'

import { CommonTitle } from 'components/CommonTitle'

const Products = ({ items, title }: any) => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const rows = Math.ceil(items.length! / 4)
        const tempProducts = []
        for (let index = 0; index < rows; index++) {
            const productRow = items.slice(index * 4, (index + 1) * 4)
            tempProducts.push(
                <div className={`product-row ${productRow.length < 4 ? 'left' : ''}`}>
                    {productRow.map((product: any) => {
                        return <CardComponent data={product}></CardComponent>
                    })}
                </div>
            )
        }
        setProducts(<div className="products">{tempProducts}</div>)
    }, [items])

    return (
        <React.Fragment>
            <section className="section pb-0 category-page">
                <Container>
                    <CommonTitle title={title} />
                    {products}
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Products

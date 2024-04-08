import { useParams } from 'react-router-dom'

import { ProductProvider, useProduct } from './context'

import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { CardComponent } from 'components/CardComponent'

export default () => {
    function Category() {
        const { productsGQL } = useProduct()
        const { type, slug } = useParams()

        console.log(type, slug)

        useEffect(() => {
            productsGQL.fn({
                variables: {
                    slug
                }
            })
        }, [])

        useEffect(() => {
            productsGQL.fn({
                variables: {
                    slug
                }
            })
        }, [type, slug])

        const [products, setProducts] = useState<any>([])
        useEffect(() => {
            switch (productsGQL.status) {
                case 'success': {
                    const data = productsGQL.data
                    const rows = Math.ceil(data?.products.length! / 4)
                    const tempProducts = []
                    for (let index = 0; index < rows; index++) {
                        tempProducts.push(
                            <div className="product-row">
                                {data?.products.slice(index * 4, (index + 1) * 4).map((product) => {
                                    return <CardComponent data={product}></CardComponent>
                                })}
                            </div>
                        )
                    }
                    setProducts(<div className="products">{tempProducts}</div>)
                    break
                }

                case 'not-found': {
                    setProducts([])
                    break
                }
            }
        }, [productsGQL.status])

        return (
            <section className="section category-page">
                <Container>
                    <div className="title">{`${type?.toUpperCase()} / ${slug?.toUpperCase()}`}</div>
                    {products}
                </Container>
            </section>
        )
    }

    return (
        <ProductProvider>
            <Category></Category>
        </ProductProvider>
    )
}

// export default Wrapper({ parent: ProductProvider, children: Category })

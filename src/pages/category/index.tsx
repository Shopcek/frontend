import { useParams } from 'react-router-dom'

import { ProductProvider, useProduct } from './context'

import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { CardComponent } from 'components/CardComponent'

import ethereum from '../../assets/images/collections/ethereum.png'
import ecoFriendly from '../../assets/images/collections/eco-friendly.png'
import hats from '../../assets/images/collections/hats.png'
import hoodies from '../../assets/images/collections/hoodie.png'
import skale from '../../assets/images/collections/skale.png'
import sweatshirts from '../../assets/images/collections/sweats.png'
import bitcoin from '../../assets/images/collections/bitcoin.png'
import zetachain from '../../assets/images/collections/zeta.png'
import tshirt from '../../assets/images/collections/t-shirt.png'

const banners = {
    bitcoin,
    ethereum,
    hats,
    hoodies,
    skale,
    sweatshirts,
    zetachain,
    't-shirts': tshirt,
    'eco-friendly': ecoFriendly
}

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

        const [banner, setBanner] = useState<any>()
        useEffect(() => {
                setBanner(<img className='banner' src={(banners as any)[slug as any]}></img>)
        }, [type, slug])

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
                    {banner}
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

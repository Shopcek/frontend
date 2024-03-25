import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Tab, Nav, Table, Form, Image, Dropdown } from 'react-bootstrap'

import { Link } from 'react-router-dom'
// //scss
// import 'swiper/css'
// import 'swiper/css/thumbs'
// import 'swiper/css/navigation'

import { useParams } from 'react-router-dom'

import { Telegram, Medium, Facebook, Instagram, Linkedin, Twitter } from 'Components/Images/BlueSocial'

import { colors } from 'data/colors'

import ModalImage from 'react-modal-image'
import { ProductProvider, useProduct } from './context'

import type { Product, Option } from './context/types'

import { Details } from './details'
import { Pictures } from './pictures'



function Productdetails() {
    function Component() {
        let { slug } = useParams()
        const { productGQL } = useProduct()

        useEffect(() => {
            if (productGQL) {
                productGQL.fn!({
                    variables: {
                        slug
                    }
                })
            }
        }, [])

        let details, pictures
        if (productGQL) {
            switch (productGQL.status) {
                case 'success': {
                    details = <Details data={productGQL.data!}/>

                    pictures = <Pictures image={productGQL.data!.image} images={productGQL.data!.variants.map((variant)=>{
                        return variant.image
                    })} />
                    break
                }

                case 'error': {
                    break
                }

                case 'error-and-data': {
                    break
                }

                case 'loading': {
                    break
                }

                case 'not-called': {
                }
            }
        }

        // let { addWishList, deleteWishList, wishlist } = useWishList()

        // let { addItem } = useCart()

        // let productsData = useQuery(products)
        // const [productsList, setProductsList] = useState<any[]>([])
        // useEffect(() => {
        //     if (JSON.stringify(productsData.data) !== JSON.stringify(productsList) && !productsData.loading && !productsData.error) {
        //         setProductsList(productsData.data)
        //     }
        // }, [productsData.data])

        // let sliderProduct = productData.color.map((color: any, index: number) => {
        //     let item = productData.variants.find((item) => {
        //         return item.color === color
        //     })

        //     return {
        //         id: index + 1,
        //         image: item.image
        //     }
        // })


        const [count, setCount] = useState(1)



        // let [inList, setInList] = useState(
        //     !!wishlist.find((item) => {
        //         return item === slug
        //     })
        // )

        return (
            <React.Fragment>
                <div className="product-details-page">
                    <section className="section">
                        <Container className="product-details-container">
                            
                            
                            {details}
                        </Container>
                    </section>

                    <section className="section pt-0">
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="Description">
                                        <Row>
                                            <Col sm={12}>
                                                <Nav variant="underline" className="nav-tabs-custom mb-3">
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Information">
                                                            Additional Information
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Description">
                                                            Description
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Reviews">
                                                            Reviews
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link as="a" eventKey="Shipping">
                                                            Shipping
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content></Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <hr />

                    <section className="section pt-0">{/* <Slider items={productsList} title="Related Products"></Slider> end row */}</section>
                </div>
            </React.Fragment>
        )
    }

    return (
        <ProductProvider>
            <Component />
        </ProductProvider>
    )
}

export default Productdetails

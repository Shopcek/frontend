import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

import { DetailsModal } from './details'

import ethereum from '../../../assets/images/ethereum-eth-logo.png'
import bitcoin from '../../../assets/images/bitcoin-btc-logo.png'

const collections_data = [
    {
        name: 'PROJECTS',
        image: '',
        slug: 'projects',
        sub_collections: [
            {
                name: 'ETHEREUM',
                image: ethereum,
                slug: 'ethereum'
            },
            {
                name: 'BITCOIN',
                image: bitcoin,
                slug: 'bitcoin'
            }
        ]
    },
    {
        name: 'EXCHANGES',
        image: '',
        slug: 'exchanges',
        sub_collections: []
    },

    {
        name: "OG's",
        image: '',
        slug: 'og-s',
        sub_collections: []
    }
]

export const CollectionModal = ({ show, handleClose }: any) => {
    function Component() {
        const [card, setCard] = useState(false)
        const handlecardClose = () => {
            setCard(false)
            handleClose()
        }
        const handlecardShow = () => setCard(true)

        const [extended, setExtended] = useState<string | undefined>(undefined)
        useEffect(() => {
            if (card) {
                setExtended('extended')
            } else {
                setExtended(undefined)
            }
        }, [card])

        const [content, setContent] = useState<any>()

        function setNewContent(slug: string) {
            const contents = collections_data.find((item) => {
                return item.slug === slug
            })!

            setContent(
                <div className={slug}>
                    <div className="items">
                    {contents.sub_collections.map((item: any) => {
                        return <div className='item' onClick={console.log}>
                            <img src={item.image} alt="" />
                            <div>{item.name}</div>
                         </div>
                    })}
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <Offcanvas show={show} onHide={handleClose} placement="start" className={`collections-modal ${extended}`}>
                    <Offcanvas.Header closeButton className="header">
                        <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                            Collections
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className="px-0">
                        <SimpleBar className="body h-100">
                            {collections_data.map((item: any) => {
                                return (
                                    <div
                                        onClick={() => {
                                            setNewContent(item.slug)
                                            handlecardShow()
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                )
                            })}
                        </SimpleBar>
                    </Offcanvas.Body>

                    <DetailsModal show={card} handlecardClose={handlecardClose} content={content}></DetailsModal>
                </Offcanvas>
            </React.Fragment>
        )
    }

    return <Component />
}

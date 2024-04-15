import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

import { DetailsModal } from './details'

import ethereum from '../../../assets/images/ethereum-eth-logo.png'
import bitcoin from '../../../assets/images/bitcoin-btc-logo.png'
import zetachain from '../../../assets/images/zetachain.png'
import skale from '../../../assets/images/skale.png'
import { useNavigate } from 'react-router-dom'

import projects from '../../../assets/images/projects.png'
import ogs from '../../../assets/images/ogs.png'
import boutique from '../../../assets/images/boutique.png'
import icon from '../../../assets/images/icon.svg'
import dropdown from '../../../assets/images/dropdown.png'

export const collections_data = [
    {
        name: 'PROJECTS',
        image: '',
        slug: 'projects',
        icon: projects,
        sub_collections: [
            {
                name: 'Bitcoin',
                image: bitcoin,
                slug: 'bitcoin'
            },
            {
                name: 'Ethereum',
                image: ethereum,
                slug: 'ethereum'
            },
            {
                name: 'ZetaChain',
                image: zetachain,
                slug: 'zetachain'
            },
            {
                name: 'Skale',
                image: skale,
                slug: 'skale'
            }
        ]
    },
    {
        name: "OG's",
        image: '',
        slug: 'og-s',
        icon: ogs,
        sub_collections: []
    },

    {
        name: 'BLOCKCHAIN Boutique',
        image: '',
        slug: 'blockchain-boutique',
        icon: boutique,
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

        const navigate = useNavigate()

        const [extended, setExtended] = useState<string | undefined>(undefined)
        useEffect(() => {
            if (card) {
                setExtended('extended')
            } else {
                setExtended(undefined)
            }
        }, [card])

        const [content, setContent] = useState<any>()
        const [header, setHeader] = useState<any>()

        function setNewContent(slug: string) {
            const contents = collections_data.find((item) => {
                return item.slug === slug
            })!

            setContent(
                <div className={slug}>
                    <div className="items">
                        {contents.sub_collections.map((item: any) => {
                            return (
                                <div
                                    className="item"
                                    onClick={() => {
                                        navigate(`/products/collection/${item.slug}`)
                                        handleClose()
                                    }}
                                >
                                    <img src={item.image} alt="" />
                                    <div>{item.name}</div>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            )

            setHeader([<img src={contents.icon} alt="" />, contents.name])
        }

        return (
            <React.Fragment>
                <Offcanvas show={show} onHide={handleClose} placement="start" className={`collections-modal`}>
                    <Offcanvas.Header className="header">
                        <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                            <img src={icon} alt="" /> Collections
                        </Offcanvas.Title>

                        <hr />
                    </Offcanvas.Header>

                    <Offcanvas.Body className="px-0">
                        <SimpleBar className="body h-100">
                            {collections_data.map((item: any) => {
                                return (
                                    <div
                                        className="item"
                                        onClick={() => {
                                                if (item.slug !== 'blockchain-boutique'){
                                                    setNewContent(item.slug)
                                                    handlecardShow()
                                                } else {
                                                    handleClose()
                                                    navigate('/products/collection/blockchain-boutique')
                                                }
                                        }}
                                    >
                                        <img src={item.icon} alt="" />
                                        {item.name}
                                        {item.slug !== 'blockchain-boutique' ? <img src={dropdown} alt="" className="dropdown ${animation}" /> : undefined}
                                    </div>
                                )
                            })}
                        </SimpleBar>
                    </Offcanvas.Body>

                    <DetailsModal show={card} handlecardClose={handlecardClose} content={content} header={header}></DetailsModal>
                </Offcanvas>
            </React.Fragment>
        )
    }

    return <Component />
}

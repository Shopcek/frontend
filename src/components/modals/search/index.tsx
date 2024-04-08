import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { SearchProvider, useSearch } from '../../../context/search'

export const SearchModal = ({ show, handleClose, handleShow }: any) => {
    function Component() {
        const { searchGQL } = useSearch()
        const navigate = useNavigate()
        const [searchParams, setSearchParams] = useSearchParams()

        const [inSearch, setInSearch] = useState(false)
        useEffect(() => {
            if (window.location.pathname === '/search') {
                const name = searchParams.get('name')
                if (name) {
                    setValue(name)
                }

                setInSearch(true)
            }
        }, [window.location.pathname])

        useEffect(() => {}, [])

        const [value, setValue] = useState('')

        function onChange(event: any) {
            setValue(event.value)
        }

        useEffect(() => {
            if (value !== '') {
                searchGQL.fn({
                    variables: {
                        name: value
                    }
                })
            } else {
                setProducts([])
            }
        }, [value])

        const [products, setProducts] = useState<any>()
        useEffect(() => {
            switch (searchGQL.status) {
                case 'success': {
                    console.log(searchGQL.data)
                    setProducts(
                        searchGQL.data.map((product: any) => {
                            return (
                                <Link to={`/product-details/${product.slug}`} className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <Image src={product.image} alt="" className="avatar-xs flex-shrink-0 me-2" roundedCircle />
                                        <div>
                                            <h6 className="mb-0">{product.name}</h6>
                                            <span className="fs-12 text-muted">{product.price.toFixed(2)}$</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    )
                    break
                }
            }
        }, [searchGQL.status])

        return (
            <React.Fragment>
                <div className="input-group">
                <Form.Control
                    // onClick={!inSearch ? handleShow : ()=>{}}
                    className="search-bar"
                    onChange={(e:any)=>{
                        setValue(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            navigate(`/search?name=${value}`);
                        }}
                    value={value}
                    size="lg"
                    type="text"
                    placeholder="Search for product"
                    />
                    <span className="input-group-append">

                     
               <i className="bi bi-search search-icon"></i>
                </span>
                </div>


                <Modal show={show} backdrop={true} onHide={handleClose} size="lg" contentClassName="rounded" id="searchModal">
                    <Modal.Header className="p-3">
                        <div className="position-relative w-100">
                            <Form.Control
                                type="text"
                                className="form-control-lg border-2 search-bar"
                                placeholder="Search for product"
                                id="search-options"
                                value={value}
                                onChange={(e: any) => onChange(e.target)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                        navigate(`/search?name=${value}`);
                                    }}
                            />
                            <span className="bi bi-search search-widget-icon fs-17"></span>
                            <Link
                                to="#"
                                className="search-widget-icon fs-14 link-secondary text-decoration-underline search-widget-icon-close"
                                id="search-close-options"
                            >
                                Clear
                            </Link>
                        </div>
                    </Modal.Header>
                    <SimpleBar className="pe-2 ps-3 mt-3">
                        <div className="list-group list-group-flush border-dashed">
                            <div className="notification-group-list">{products}</div>
                        </div>
                    </SimpleBar>
                </Modal>
            </React.Fragment>
        )
    }

    return (
        <SearchProvider>
            <Component></Component>
        </SearchProvider>
    )
}

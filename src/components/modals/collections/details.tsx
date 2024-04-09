import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Col, Modal, Row, Card, Offcanvas, Table, Form, Button, Image, Container, Spinner } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

//component

import { useNavigate } from 'react-router-dom'
import { useCart, CartProvider } from 'context/cart'
import { simplifyResponse } from 'lib/simplify-response'

import { useRefetch } from 'context/refetch'


export const DetailsModal = ({ show, handleClose, content, header }: any) => {
    function Component() {

        return (
            <React.Fragment>
                <Offcanvas show={show} onHide={handleClose} placement="start" className="details-modal" backdrop={false}>
                    <Offcanvas.Header className="header">
                        <Offcanvas.Title id="ecommerceCartLabel" as="h5">
                            {header}
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className="px-0">
                        <SimpleBar className="body h-100">
                            {content}
                        </SimpleBar>
                    </Offcanvas.Body>
                </Offcanvas>
            </React.Fragment>
        )
    }

    return (
        <CartProvider>
            <Component />
        </CartProvider>
    )
}

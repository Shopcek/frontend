import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Features5 from 'assets/images/ecommerce/features/img-5.jpg'
import Features4 from 'assets/images/ecommerce/features/img-4.jpg'
import Features1 from 'assets/images/ecommerce/features/img-1.jpg'

import config from 'config/config'
import { useQuery } from 'lib/query-wrapper'
import { gql } from '@apollo/client'

const query = gql`
  query {
    campaign {
      data {
        attributes {
          campaigns {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            heading
            subHeading
            btnLink
            btnText
          }
        }
      }
    }
  }
`

export default function Section() {
  const { data, loading } = useQuery(query)

  if (loading) {
    return
  }

  return (
    <section className="section pb-0 mt-4">
      <Container fluid>
        <Row className="g-2">
          <Col lg={7}>
            <Link to={data.campaigns[0].btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
              <Image
                src={config.serverUrl + data.campaigns[0].image.url}
                className="w-100 object-fit-cover"
                rounded
                alt=""
                style={{ maxHeight: '480px' }}
              />
              <div className="product-content p-3 ps-5" style={{ maxWidth: '390px' }}>
                <p className="text-uppercase fs-15 text-secondary fw-semibold mb-2">{data.campaigns[0].heading}</p>
                <h1 className="display-5 lh-base text-dark ff-secondary">{data.campaigns[0].subHeading}</h1>
                <div className="product-btn mt-4">
                  {data.campaigns[0].btnText} <i className="bi bi-arrow-right ms-2"></i>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={5}>
            <Row className="g-2">
              {data.campaigns.slice(1, data.campaigns.length).map((campaign: any) => {
                return (
                  <Col key={campaign.image.url} lg={12}>
                    <Link to={campaign.btnLink} className="product-banner-1 mt-4 mt-lg-0 rounded overflow-hidden d-block">
                      <Image
                        src={config.serverUrl + campaign.image.url}
                        className="w-100 object-fit-cover"
                        alt=""
                        style={{ maxHeight: '236px' }}
                        rounded
                      />
                      <div className="product-content p-3 ps-5">
                        <p className="text-uppercase fw-semibold fs-14 mb-2">{campaign.heading}</p>
                        <h1 className="lh-base ff-secondary text-dark fw-medium">{campaign.subHeading}</h1>
                      </div>
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

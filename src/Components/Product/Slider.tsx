import React, { useEffect } from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { CommonTitle } from 'Components/Homepage'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import config from 'config/config'

import { addItemToCart, cartQuery } from 'lib/common-queries'
import { useMutation, useQuery } from 'lib/query-wrapper'

const Slider = ({ items }: any) => {
  let { fn, data, loading, error } = useMutation(addItemToCart)
  let { refetch } = useQuery(cartQuery)

  useEffect(() => {
    refetch()
  }, [loading])

  return (
    <React.Fragment>
      <section className="section pb-0">
        <Container>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
                }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="latest-slider pt-5 swiper-pointer-events"
              >
                <div
                  className="swiper-button-next h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                ></div>
                <div
                  className="swiper-button-prev h-auto"
                  aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                ></div>
                <div className="swiper-wrapper">
                  {items.map((item: any) => {
                    return (
                      <SwiperSlide className="swiper-slide" key={item.slug}>
                        <Card className="overflow-hidden">
                          <div className={`bg-warning-subtle rounded-top py-4`}>
                            <div className="gallery-product">
                              <Image
                                src={config.serverUrl + item.images[0].url}
                                alt=""
                                style={{ maxHeight: '215px', maxWidth: '100%' }}
                                className="mx-auto d-block"
                              ></Image>
                            </div>
                          </div>
                          <Card.Body>
                            <div>
                              <Link to={`/product-details/${item.slug}`}>
                                <h6 className="fs-15 lh-base text-truncate mb-0">{item.name}</h6>
                              </Link>
                              <div className="mt-3">
                                <span className="float-end">
                                  {5}
                                  <i className="ri-star-half-fill text-warning align-bottom"></i>
                                </span>
                                <h5 className="mb-0">
                                  {item.price}
                                  {'$'}
                                </h5>
                              </div>
                              <div className="mt-3">
                                <Button
                                  className="btn btn-primary btn-sm"
                                  onClick={() => {
                                    fn({
                                      variables: {
                                        slug: item.slug
                                      }
                                    })
                                  }}
                                >
                                  <i className="mdi mdi-cart me-1"></i> Add to cart
                                </Button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </SwiperSlide>
                    )
                  })}
                </div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Slider

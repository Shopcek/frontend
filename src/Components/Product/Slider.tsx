import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { CardComponent } from 'Components/CardComponent'

import { CommonTitle } from 'Components/CommonTitle'

const Slider = ({ items, title }: { items: any[]; title: string }) => {
    return (
        <React.Fragment>
            <Container>
                <section className="section pb-0 slider">
                    <CommonTitle title={title} />
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        }}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="latest-slider swiper-pointer-events"
                    >
                        {/* Slider sağ sol butonları */}
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
                                        <CardComponent data={item} />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </section>
            </Container>
        </React.Fragment>
    )
}

export default Slider

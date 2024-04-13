import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { CardComponent } from 'components/CardComponent'

import { CommonTitle } from 'components/CommonTitle'

import right from '../../assets/images/right.svg'
import left from '../../assets/images/left.svg'

const Slider = ({ items, title }: { items: any[]; title: string }) => {
    return (
        <React.Fragment>
            <section className="section pb-0">
                <CommonTitle title={title} />
                <Container className="slider">
                    <img
                        src={right}
                        className="swiper-button-next swiper-button"
                        aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                        onClick={() => {
                            //@ts-ignore
                            const swiper = document.querySelector('#productSlider').swiper
                            // swiper.activeIndex = swiper.activeIndex + 1
                            swiper.slideNext()
                            // swiper.activeIndex = swiper.activeIndex + 1
                        }}
                    ></img>
                    <Swiper
                        modules={[Navigation]}
                        id="productSlider"
                        slidesPerView={5}
                        spaceBetween={15}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="latest-slider q"
                    >
                        {/* Slider sağ sol butonları */}

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
                    <img
                        className="swiper-button-prev swiper-button"
                        aria-controls="swiper-wrapper-2aa67f756d27c1eb"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                        onClick={() => {
                            //@ts-ignore
                            const swiper = document.querySelector('#productSlider').swiper
                            console.log(swiper)
                            // swiper.activeIndex = swiper.activeIndex - 1
                            swiper.slidePrev()
                        }}
                        src={left}
                    ></img>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Slider

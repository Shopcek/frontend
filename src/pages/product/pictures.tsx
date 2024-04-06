import ModalImage from 'react-modal-image'
import { useState, useEffect } from 'react'

import { Button, Image } from 'react-bootstrap'

import { useProduct } from './context'
import { Option } from './context/types'

type img = { image: string; color: Option }

export function Pictures({ images, image, colors }: { images: img[]; image: string; colors: Option[] }) {

    const [bigImage, setBigImage] = useState(image)
    const [smallImages, setSmallImage] = useState<img[]>(
        colors.map((color) => {
            return images.find((item) => {
                return color.value === item.color.value
            })
        }) as img[]
    )

    const [sliderId, setSliderId] = useState(1)
    const [sliderImg, setSliderImg] = useState(smallImages)

    const { color: colorState } = useProduct()
    const [color, setColor] = colorState
    useEffect(() => {
        const newImage = smallImages.find((image) => {
            return image.color.value === color?.value
        })

        if (newImage) {
            setBigImage(newImage.image)
        }
    }, [color])

    const handleSetImg = (id: any) => {
        setSliderId(id)
        setSliderImg(smallImages.filter((selectImg: any) => selectImg.id === id))
    }

    return (
        <div className="pictures">
            <div className="small-pictures">
                {(smallImages.length <= 4 ? smallImages : smallImages.slice(sliderId - 1, sliderId + 3))?.map((item: any, idx: number) => {
                    return (
                        <Image
                            src={item.image}
                            key={idx}
                            onClick={() => {
                                setColor(item.color)
                            }}
                        />
                    )
                })}
                <div className="buttons">
                    <Button
                        onClick={() => {
                            if (sliderId + 3 >= smallImages.length) {
                                return
                            }

                            handleSetImg(sliderId + 1)
                        }}
                        className="btn-primary"
                    >
                        <i className="bi bi-arrow-down"></i>
                    </Button>
                    <Button
                        onClick={() => {
                            if (sliderId <= 1) {
                                return
                            }
                            handleSetImg(sliderId - 1)
                        }}
                        className="btn-secondary"
                    >
                        <i className="bi bi-arrow-up"></i>
                    </Button>
                </div>
            </div>
            <div className="big-picture">
                <ModalImage className="modal-image" small={bigImage} large={bigImage} />
            </div>
        </div>
    )
}

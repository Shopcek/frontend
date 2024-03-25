import ModalImage from "react-modal-image"
import { useState } from "react"

import { Button } from "react-bootstrap"

export function Pictures({images, image}: {images:string[], image: string}) {
    const [sliderImg, setSliderImg] = useState(images)
    const [sliderId, setSliderId] = useState(1)

    const handleSetImg = (id: any) => {
        setSliderId(id)
        setSliderImg(images.filter((selectImg: any) => selectImg.id === id))
    }

    console.log(image, images)

    return (
        <div className="pictures">
            <div className="small-pictures">
                {(images.length <= 4 ? images : images.slice(sliderId - 1, sliderId + 3))?.map((item: any, idx: number) => {
                    return <ModalImage small={item} large={item} key={idx}/>
                })}
                <div className="buttons">
                    <Button
                        onClick={() => {
                            if (sliderId <= 1) {
                                return
                            }

                            handleSetImg(sliderId - 1)
                        }}
                        className="btn-primary"
                    >
                        <i className="bi bi-arrow-down"></i>
                    </Button>
                    <Button
                        onClick={() => {
                            if (sliderId + 3 >= images.length) {
                                return
                            }

                            handleSetImg(sliderId + 1)
                        }}
                        className="btn-secondary"
                    >
                        <i className="bi bi-arrow-up"></i>
                    </Button>
                </div>
            </div>
            <div className="big-picture">
                <ModalImage className="modal-image" small={image} large={image} />
            </div>
        </div>
    )
}

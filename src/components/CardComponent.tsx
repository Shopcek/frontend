import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardComponent = ({ data }: { data: any }) => {
    const numbers = data.price.toFixed(2).toString().split('.')

    return (
        <Card className="overflow-hidden card product-cart">
            <Card.Body>
                <Link to={`/product-details/${data.slug}`}>
                    <div className="product-name">
                        <h6 className="fs-15 lh-base text-truncate mb-0">{data.name}</h6>
                    </div>

                    <div>
                        <div className={`rounded-top py-4`}>
                            <div className="gallery-product">
                                <Image className="mx-auto d-block" src={data.image} />
                            </div>
                        </div>

                        <div className="item-info mt-3">
                            <h5 className="mb-0">
                                <div className="price">
                                    <div className="bigger">$
                                        {
                                            numbers[0].split('').map((number: any)=>{
                                                return <div className="number">
                                                    {number}
                                                </div>
                                            })
                                        }
                                    </div>
                                    <div className="thinner">.{numbers[1]}</div>
                                </div>
                            </h5>
                            <div className="mt-3">
                                <Link to={`/product-details/${data.slug}`} className="btn btn-secondary btn-hover w-100 add-btn">
                                    BUY
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

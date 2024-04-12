import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CardComponent = ({ data }: { data: any }) => {
    return (
        <Card className="overflow-hidden card product-cart">


            <Card.Body>

            <Link to={`/product-details/${data.slug}`}>
                        <h6 className="fs-15 lh-base text-truncate mb-0">{data.name}</h6>
                    </Link>

                <div>
                <div className={`rounded-top py-4`}>
                <div className="gallery-product">
                    <Image className="mx-auto d-block" src={data.image} />
                </div>
            </div>

                    <div className="item-info mt-3">
                        <h5 className="mb-0">
                            {data.price}
                            {'$'}
                        </h5>
                        <div className="mt-3">
                        <Link to={`/product-details/${data.slug}`} className="btn btn-primary btn-hover w-70 add-btn">
                            <i className="mdi mdi-cart me-1"></i> Select options
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
            </Card.Body>

        </Card>
    )
}

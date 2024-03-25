import { Image, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"


export function Items({ items }: { items: any[] }) {
    console.log(items)
    
    return (
        <ul className="list-group list-group-flush cartlist">
            {items.map((item: any) => {
                return (
                    <li key={item.variant.product.slug} className="list-group-item product">
                        <div className="d-flex gap-3">
                            <div className="flex-shrink-0">
                                <div className={`avatar-md warning-subtle `} style={{ height: '110%', width: '110%' }}>
                                    <div className={`avatar-title rounded-3`}>
                                        <Image src={item.variant.product.image} alt="" className="avatar-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <Link to={`/product-details/${item.variant.product.slug}`}>
                                    <h5 className="fs-15">{item.variant.product.name}</h5>
                                </Link>
                                <div className="d-flex mb-3 gap-2">
                                    <div className="options">
                                        <span className="fw-medium">{`Color : ${item.variant.color.value}`}</span>
                                        <span className="fw-medium">{`Size : ${item.variant.size.value}`}</span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="input-step">
                                        <Button
                                            className="minus"
                                            onClick={() => {
                                                // deleteItem(item.product.slug, item.options)
                                            }}
                                        >
                                            -
                                        </Button>
                                        <Form.Control type="number" className="product-quantity" value={item.count} min="0" max="100" readOnly />
                                        <Button
                                            className="plus"
                                            onClick={() => {
                                                // addItem({
                                                //     ...item,
                                                //     count: 1
                                                // })
                                            }}
                                        >
                                            +
                                        </Button>
                                    </div>{' '}
                                    X
                                    <div className="text-muted fw-medium mb-0">
                                        <span className="product-price"> ${item.variant.product.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0 d-flex flex-column justify-content-between align-items-end">
                                <Button
                                    className="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
                                    onClick={() => {
                                        // setSlug(item.product.slug)
                                        // setOptions(item.options)
                                        // RemoveModel(item.id)
                                    }}
                                >
                                    <i className="ri-close-fill fs-16"></i>
                                </Button>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
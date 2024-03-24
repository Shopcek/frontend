import { useWishList } from 'oldcontext/wishlist'
import { Link } from 'react-router-dom'

import { Wishlist } from 'Components/Images/Icons'

export function WishList() {
    // let { wishlist } = useWishList()
    return (
        <div className="topbar-head-dropdown ms-1 header-item">
            <Link
                type="button"
                className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle text-muted"
                data-bs-toggle="offcanvas"
                data-bs-target="#ecommerceCart"
                aria-controls="ecommerceCart"
                to="/account/wishlist"
            >
                <Wishlist className="rounded-circle header-profile-user" />
                <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">
                    0{/* {wishlist.length} */}
                </span>
            </Link>
        </div>
    )
}

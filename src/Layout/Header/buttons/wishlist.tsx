import { Link } from 'react-router-dom'
import { Wishlist } from 'Components/Images/Icons'

import { useWishlist, WishlistProvider } from 'context/wishlist'
import { useUser } from 'context/user'

import { useEffect, useState } from 'react'

export function WishList() {
    function Component(){
        const { userWishlistGQL } = useWishlist()
        const { status } = useUser()
    
        useEffect(() => {
            switch (status) {
                case 'connected': {
                    userWishlistGQL.fn()
                    break
                }
            }
        }, [status])
    
        const [len, setLen] = useState<any>()
        useEffect(() => {
            switch (userWishlistGQL.status) {
                case 'success': {
                    setLen(
                        <span className="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-primary">
                            {userWishlistGQL.data.items.length}
                        </span>
                    )
                }
            }
        }, [userWishlistGQL.status])
    
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
                    {len}
                </Link>
            </div>
        )
    }

    return <WishlistProvider>
        <Component>
            
        </Component>
    </WishlistProvider>
}

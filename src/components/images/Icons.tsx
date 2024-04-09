import cart from '../../assets/images/icons/cart.png'
import wishlist from '../../assets/images/icons/wishlist.png'
import user from '../../assets/images/icons/user.png'
import delivery from '../../assets/images/icons/delivery.png'
import collections from '../../assets/images/icons/collections.png'

import earn from '../../assets/images/icons/earn.png'
import hoodies from '../../assets/images/icons/hoodies.png'
import tshirts from '../../assets/images/icons/tshirts.png'
import sweatshirts from '../../assets/images/icons/sweatshirts.png'
import hats from '../../assets/images/icons/hats.png'
import refill from '../../assets/images/icons/refill.svg'

import { Image } from 'react-bootstrap'

export function Earn({ className = '' }: { className?: string }) {
    return <Image src={earn} className={className} />
}

export function Hoodies({ className = '' }: { className?: string }) {
    return <Image src={hoodies} className={className} />
}

export function TShirts({ className = '' }: { className?: string }) {
    return <Image src={tshirts} className={className} />
}

export function Sweatshirts({ className = '' }: { className?: string }) {
    return <Image src={sweatshirts} className={className} />
}

export function Hats({ className = '' }: { className?: string }) {
    return <Image src={hats} className={className} />
}

export function Refill({ className = '' }: { className?: string }) {
    return <Image src={refill} className={className} />
}

export function Cart({ className = '' }: { className?: string }) {
    return <Image src={cart} className={className} />
}

export function Wishlist({ className = '' }: { className?: string }) {
    return <Image src={wishlist} className={className} />
}

export function User({ className = '' }: { className?: string }) {
    return <Image src={user} className={className} />
}

export function Delivery({ className = '' }: { className?: string }) {
    return <Image src={delivery} className={className} />
}

export function Collections({ className = '' }: { className?: string }) {
    return <Image src={collections} className={className} />
}

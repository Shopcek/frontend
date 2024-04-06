import { Navigate } from 'react-router-dom'

import Home from 'pages/home'

import Checkout from 'pages/shop/checkout'
import Order from 'pages/shop/order'

//pages /user
import Account from 'pages/user/account'

//Productdetails
import ProductDetails from 'pages/product'

//category
import { Category } from 'pages/category'

import Earn from 'pages/earn'

const authProtectedRoutes = [
    { path: '/shop/checkout', component: <Checkout /> },
    { path: '/shop/order/:id', component: <Order /> },

    { path: '/earn', component: <Earn /> },

    { path: '/account', component: <Account /> },
    { path: '/account/:section', component: <Account /> },
    { path: '/', component: <Home /> },
    { path: '*', component: <Navigate to="/" /> },

    { path: '/product-details/:slug', component: <ProductDetails /> },

    {path: '/products/:type/:slug', component: <Category/>}
]
export { authProtectedRoutes }

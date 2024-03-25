import { Navigate } from 'react-router-dom'

import Home from 'Pages/Home'

import Checkout from 'Pages/Shop/checkout'
import Success from 'Pages/Shop/order'

//pages /user
import Account from 'Pages/User/account'

//Productdetails
import Productdetails from 'Pages/Product'

import Earn from 'Pages/Earn'

const authProtectedRoutes = [
    { path: '/shop/checkout', component: <Checkout /> },
    { path: '/shop/order/:id', component: <Success /> },

    { path: '/earn', component: <Earn /> },

    { path: '/account', component: <Account /> },
    { path: '/account/:section', component: <Account /> },
    { path: '/', component: <Home /> },
    { path: '*', component: <Navigate to="/" /> },

    { path: '/product-details/:slug', component: <Productdetails /> },

]
export { authProtectedRoutes }

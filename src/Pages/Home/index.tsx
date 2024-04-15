import React from 'react'

import { Slider, Products } from 'components/product'
import Section from './section'

import { useQuery } from 'lib/query-wrapper'
import { products } from 'lib/common-queries'



const Home = () => {
    document.title = 'Shopcek'

    let { data, loading, error } = useQuery(products)

    return (
        <React.Fragment>
            <Section />
            <Slider items={(data as any) || []} title="Best Sellers" />
            <Products items={data || []} title="Hot Deals" />
        </React.Fragment>
    )
}

export default Home

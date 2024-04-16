import React from 'react'

import { Slider, Products } from 'components/product'
import Section from './section'

import { useQuery } from 'lib/query-wrapper'
import { products } from 'lib/common-queries'

function chooseRandom({ data }: { data: [] }) {
    console.log(data)
    
    if (!data) {
        return []
    }

    return data.map((item) => {
        return data[Math.floor(Math.random() * data.length)]
    })
}

const Home = () => {
    document.title = 'Shopcek'

    let { data, loading, error } = useQuery(products)

    return (
        <React.Fragment>
            <Section />
            <Slider items={chooseRandom({data: (data as any) || []})} title="Best Sellers" />
            <Products items={chooseRandom({data: (data as any) || []})} title="Hot Deals" />
        </React.Fragment>
    )
}

export default Home

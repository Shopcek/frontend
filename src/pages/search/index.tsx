import { SearchProvider, useSearch } from 'context/search'
import { Container } from 'react-bootstrap'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CardComponent } from 'components/CardComponent'

export function Search() {
    function Component() {
        const { searchGQL } = useSearch()
        const [searchParams, setSearchParams] = useSearchParams()

        const name = searchParams.get('name')
        
        useEffect(()=>{
            if (!name){
                return
            }
            searchGQL.fn({
                variables : {
                    name
                }
            })
        }, [name])

        const [products, setProducts] = useState<any>([])
        useEffect(() => {
            switch (searchGQL.status) {
                case 'success': {
                    const data = searchGQL.data
                    const rows = Math.ceil(data?.length! / 4)
                    const tempProducts = []
                    for (let index = 0; index < rows; index++) {
                        tempProducts.push(
                            <div className="product-row">
                                {data?.slice(index * 4, (index + 1) * 4).map((product:any) => {
                                    return <CardComponent data={product}></CardComponent>
                                })}
                            </div>
                        )
                    }
                    setProducts(<div className="products">{tempProducts}</div>)
                    break
                }
            }
        }, [searchGQL.status])

        return (
            <section className="section">
                <Container>
                    <div className="search-page">
                        {products}
                    </div>
                </Container>
            </section>
        )
    }

    return (
        <SearchProvider>
            <Component></Component>
        </SearchProvider>
    )
}

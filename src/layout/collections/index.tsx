import { useCollections } from 'context/collections'
import { useEffect } from 'react'

import { collections_data } from 'components/modals/collections'

import logo from '../../assets/images/icon.svg'

export default function Collections() {
    function Component() {
        const { handleCollectionsClose, handleCollectionsShow, collectionsShow } = useCollections()

        useEffect(() => {
            console.log(collectionsShow, 'layout')
        }, [collectionsShow])

        return (
            <div
                onMouseEnter={handleCollectionsShow}
                className="collections-sidebar"
            >
                <div className="header">
                    <img src={logo} alt="" />
                </div>
                <div className="icons">
                {collections_data.map(item=>{
                    return <img src={item.icon} alt="" />
                })}
                </div>


            </div>
        )
    }

    return (
            <Component></Component>
    )
}

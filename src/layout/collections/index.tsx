import { useCollections } from 'context/collections'
import weed from '../../assets/images/weed.png'
import { useEffect } from 'react'

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
                <div className="header"></div>
                <div className="icons">
                    <img src={weed} alt="" />
                    <img src={weed} alt="" />
                    <img src={weed} alt="" />
                </div>


            </div>
        )
    }

    return (
            <Component></Component>
    )
}

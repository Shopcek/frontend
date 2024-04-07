import { useContext, createContext, useState, useEffect } from "react";

//@ts-ignore
const Context = createContext<{
    collectionsShow: boolean
    handleCollectionsShow: ()=>void
    handleCollectionsClose: ()=>void
}>()

export function useCollections(){
    return useContext(Context)
}

export function CollectionsProvider({children}: {children: any}){
    const [collectionsShow, setCollectionsShow] = useState(false)
    const handleCollectionsClose = () => {
        setCollectionsShow(false)
    }
    const handleCollectionsShow = () => {
        console.log('triggered')
        setCollectionsShow(true)
    }


    useEffect(()=>{
        console.log(collectionsShow, 'context')
    }, [collectionsShow])

    return <Context.Provider value={{collectionsShow, handleCollectionsShow, handleCollectionsClose}}>
        {children}
    </Context.Provider>

}
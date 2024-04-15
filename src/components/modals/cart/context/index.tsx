import { useContext, createContext, useState, useEffect } from "react";

//@ts-ignore
const Context = createContext<{
    openModal: ()=>void
    closeModal: ()=>void
    isOpen: boolean
}>()

export function useCartModalContext(){
    return useContext(Context)
}


export function CartModalProvider({children}: {children: any}){
    const [isOpen, setOpen]= useState(false)

    const openModal = ()=>{setOpen(true)}
    const closeModal = ()=>{setOpen(false)}


    return <Context.Provider value={{
        isOpen,openModal,closeModal
    }}>

        {children}

    </Context.Provider>
}
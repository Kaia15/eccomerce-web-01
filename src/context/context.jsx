import {createContext, useState} from 'react'

const StoreContext = createContext({})
const StoreProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemId, setItemId] = useState("")
    return (
    <StoreContext.Provider value = {{cart, setCart, itemId, setItemId}}>
        {children}
    </StoreContext.Provider>
    )
}

export {StoreContext, StoreProvider}
import {createContext, useState} from 'react'
import Cart from '../pages/cart/cart'
import Product from '../pages/product/product'

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
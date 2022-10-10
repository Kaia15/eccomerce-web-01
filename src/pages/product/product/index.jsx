import React, { useEffect, useMemo, useState, useContext } from 'react' 
import { StoreContext } from '../../../context/context'
import AddToTotal from './add/add'
import { items } from '../../../data/list'
import Count from './countbutton/count'
import Cart from '../../cart/cart'
import Detail from './detail/detailproduct'
import { Link, useParams, useHistory } from 'react-router-dom'
import AddStyle from './add/add.module.css'
import ProductStyle from './index.module.css'
import { Typography, Divider, Card } from '@mui/material'

const Product = () => {
    // onsole.log(items[id])
    // console.log(typeof id)
    // console.log(id)
    // const {id} = useParams()
    // console.log(id)
    console.log(StoreContext)
    const {itemId, setItemId} = useContext(StoreContext)
    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    const { cart, setCart } = useContext(StoreContext)
    const [item, setItem] = useState({})
    const [product, setProduct] = useState({})
    console.log(cart)

    useEffect(() => {
        setProduct(items[itemId])
    }, [])
    console.log(product)
    
    const handlePlus = () => {
        setQuantity(prev => {
        return prev + 1
        })
    }

    const handleMinus = () => {
        if (quantity <= 0) setQuantity(0)
        else setQuantity(prev => {
            return prev - 1
        })
    }
    
    const handleCart = () =>  {
        // setCart([1,2])
        // b(() => {return [1,2,3]})

        setCart(prev => {
           let matched = itemId
           let updated = prev.filter(i => i[itemId] !== matched)
           let a = prev.filter(i => i[itemId] === matched)
           if (item['quantity'] > 0) {
            if (typeof a[0] !== 'undefined') {
                a[0]['quantity'] += item['quantity']
                a[0]['subtotal'] += item['subtotal']
                updated.push(a[0])
               } else {
                updated = [...updated,item]
            }
           } else {
            alert("Please increase quantity of your product")
           }
           
           return updated
        })
        // setQuantity(0)
    }

    useMemo(() => {
        setSubtotal(quantity * items[itemId].price)
        setItem(prev => {
            return {...prev, id: itemId, price: items[itemId]['price'], quantity: quantity, subtotal: subtotal}
        })
    }, [product, quantity, subtotal])
    console.log(item)
    // console.log(quantity)
    console.log(cart)


    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Detail product = {product}/>
            <div style = {{margin: '24px'}}>
                <Typography variant = 'h7'>
                    {product['title']}
                </Typography>
                <Divider />
                <p> Price: {product['price']} </p>
                <Count quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus} />
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Link to="/cart">
                    <button
                    className={AddStyle.button}>
                        View Cart
                    </button>
                    </Link>
                </div>
                <AddToTotal handleCart={handleCart}/>
            </div>
        </div>
        
    )
    
}

export default Product
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { StoreProvider, StoreContext } from '../../context/context'
import ButtonStyle from './button.module.css'
import { Typography } from '@mui/material';

const LeftComponents = () => {
    const components = ["HOME", "ABOUT", "PRODUCTS", "CONTACT", "CART"]
    // const CART = "CART" + "(" + (cart.length).toString() + ")"
    
    return (
        <div style = {{display: "flex", flexDirection: "row", height: '50px', margin: '16px 5vw'}}>
            {components.map((compo, index) => {
                let lower = "/" + compo.toLowerCase()
                return (
                <Link to = {lower} style={{textDecoration: 'none', color: 'black'}}>
                    <Typography variant='h7' style = {{margin: '12px'}}> {compo} </Typography>
                </Link>
                )
            })}
            
        </div>
    )
}

export default LeftComponents

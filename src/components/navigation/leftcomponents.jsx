import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { StoreProvider, StoreContext } from '../../context/context'
import { Tabs, Tab } from '@mui/material';

const LeftComponents = () => {
    const components = ["HOME", "ABOUT", "PRODUCTS", "CONTACT", "CART"]
    const [val, setVal] = useState("HOME");
    const navigate = useNavigate();
    // const CART = "CART" + "(" + (cart.length).toString() + ")"
    const handleChange = (e,newValue) => {
        setVal(newValue)
    }
    const handleClick = (val) => {
        navigate(`${val}`);
    }
    console.log(val)
    return (
        <div style = {{display: "flex", flexDirection: "row", height: '50px', margin: '16px 0px', padding: '0px 32vw'}}>
            <Tabs
                value = {val}
                onChange = {handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
            >
                {components.map((compo, index) => {
                let lower = "/" + compo.toLowerCase()
                return (
                    <Tab value={compo} label={compo} onClick = {() => handleClick(lower)}/>
                )
                })}
            </Tabs>
        </div>
    )
}

export default LeftComponents

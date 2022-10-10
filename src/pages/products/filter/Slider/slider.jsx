import React, { useEffect } from 'react'
import { Slider, Box, FormControl, MenuItem, Select, InputLabel } from '@mui/material'
import SliderStyle from './slider.module.css'


const SliderProton = ({price, handlePrice}) => {
    let min
    let max
    const marks = [
        {
            value: 0,
            label: 0
        },
        {
            value: 10,
            label: 10
        },
        {
            value: 30,
            label: 30
        },
        {
            value: 50,
            label: 50
        },
        {
            value: 70,
            label: 70
        },
        {
            value: 100,
            label: 100
        }
    ]
    const prices = [
        '0-99',
        '100-499',
        '500-999',
        '1000-4999',
        '5000-10000',
    ]
    // console.log(price)
    /*useEffect(() => {
        if (price !== null) {
            min = (price[0] > 0 ) ? `$${price[0]}00` : '$0'
            max = `$${price[1]}00`
        }
    }, [])
    */
    /*function valuetext() {
        return `$${price}00`;
    }*/
        return (
        <div>
        <p className={SliderStyle.priceP}> Price Range </p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="price"> price </InputLabel>
            <Select
            labelId="price"
            id="price"
            value={price}
            label="price"
            onChange={handlePrice}
            name = 'price'
            >
            <MenuItem style = {{color: "black"}} value= {'None'}>
                <em>None</em>
            </MenuItem>
            {prices.map((pr, id) => {
                
                return (
                    <MenuItem style = {{color: "black"}} value={pr} size = "small"> {pr} </MenuItem>
                )
            })}
            
            </Select>
        </FormControl>
        </div>
        );
      
}

export default SliderProton
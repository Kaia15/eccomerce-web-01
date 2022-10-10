import React from 'react'
import { items } from '../../../../data/list'
import ProductStyle from './detail.module.css'

const Detail = ({product}) => {
    let imgPath = product['model']
    // console.log(imgPath)
    return (
    <div className={ProductStyle.img_container}>
        <img src={imgPath} className={ProductStyle.img}/>
    </div>
    )
}

export default Detail
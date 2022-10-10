import React from 'react'
import { categories } from '../../../data/fields'
import CheckBox from './CheckBox/checkbox'
import SliderProton from './Slider/slider'
import ClearFilters from './ClearFilter/clearfilter'
import Sort from '../sort/sortview/sort'
import Search from '../../../components/search/search'

const Filter = ({
    categoryIndex,
    handleCategory,
    price,
    handlePrice,
    clearFilters, 
    sortIndex,
    handleSort,
    searchVal,
    handleSearch
}) => {
    // console.log(categoryIndex)
    console.log(price)
    return (
        <div style = {{flex: '3'}}>
            <div style = {{margin: '0px 10px 0px 40px'}}>
            <CheckBox categories={categories} handleCategory = {handleCategory} />
            <SliderProton price = {price} handlePrice = {handlePrice} />
            <Sort sortIndex={sortIndex} handleSort={handleSort}/>
            <ClearFilters clearFilters={clearFilters} />
            </div>
            
        </div>
    )
}

export default Filter
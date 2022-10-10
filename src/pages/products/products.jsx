import React from 'react'
import { useState, useEffect, useRef} from 'react'
import { categories } from '../../data/fields'
import { items } from '../../data/list'
import Filter from './filter'
import List from './list/list'
import Search from '../../components/search/search'
import ProductsStyle from './products.module.css'
import { Link } from 'react-router-dom'
import AboutStyle from '../homepage/about/about.module.css'
import { ContactSupportOutlined } from '@mui/icons-material'
import ClearFilters from './filter/ClearFilter/clearfilter'
import { Typography, Divider } from '@mui/material'

const Products = () => {
    const [categoryIndex, setCategoryIndex] = useState([])
    const [price, setPrice] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const [filter, setFilter] = useState([])
    // const [all, setAll] = useState(true)
    const [clear, setClear] = useState(true)
    const [sortIndex, setSortIndex] = useState(0)

    const prices = {
        '0-99': [0,99],
        '100-499': [100,499],
        '500-999': [500,999],
        '1000-4999': [1000, 4999],
        '5000-10000': [5000,10000]
    }

    useEffect(() => { setFilter(items) }, [])
    
    const handleCategory = (id) => {
        let updatedCheck;
        if (categoryIndex.includes(id)) {
            updatedCheck = categoryIndex.filter(c => c !== id)
            setCategoryIndex(updatedCheck)
        }
        else {
            setCategoryIndex(prev => { return [...prev, id]})
            // updatedCheck = unCheck.push(id)
        }
    }

    const handlePrice = (e) => setPrice(e.target.value)

    const handleSort = (input) => setSortIndex(parseInt(input))

    const handleSearch = (input) => setSearchVal(input)

    const applySort = (list, index) => {
        if (index < 0 || index > list.length) return list
        switch(index) {
            case 0:
                return list.sort((a,b) => a.price - b.price)
            case 1: 
                return list.sort((a,b) => a.price - b.price).reverse()
            case 2:
                return list.sort((a,b) => {
                    let lowera = a['title'].toLowerCase()
                    let lowerb = b['title'].toLowerCase()
                    if (lowera < lowerb) return -1;
                    else return 1;
                })
            case 3: 
                return list.sort((a,b) => {
                    let lowera = a['title'].toLowerCase()
                    let lowerb = b['title'].toLowerCase()
                    if (lowera < lowerb) return -1;
                    else return 1;
                }).reverse()
        }
    }

    const applyFilters = useEffect(() => {
        let after = items
        // console.log(after)
        /*if (price) {
            after = after.filter((item, index) => {
                console.log(item['price'])
                return item['price'] <= parseInt(price)
            })
        }

        if (categoryIndex) {
            after = after.filter((item, index) => {
                return categoryIndex.includes(index)
            })
        }*/
        let intPrice = prices[price] || [0,10000]
        after = after.filter((item) => {
            
            if (
                ((item['price'] < intPrice[0]) || (item['price'] > intPrice[1])) ||
                (categoryIndex.length > 0 && !categoryIndex.includes(categories.indexOf(item['category'])))
            ) return false
            return true
        })

        applySort(after, sortIndex)

        if (searchVal) {
            let upperSearch = searchVal.toUpperCase();
            let lowerSearch = searchVal.toLowerCase();
            after = after.filter((item, index) => {
                let upperTitle = item['title'].toUpperCase();
                let lowerTitle = item['title'].toLowerCase();
                return upperTitle.includes(upperSearch) || lowerTitle.includes(lowerSearch)
            })
        }
        // console.log(after)
        setFilter(after)
        // setAll(true)
    }, [categoryIndex, price, searchVal, sortIndex])

    // console.log(filter)
    // console.log(price, typeof price)
    const clearFilters = () => {
        setClear(true)
        setCategoryIndex([])
        setPrice("")
    }
    console.log(filter)
    console.log(categoryIndex)
    // console.log(price)
    // console.log(searchVal)
    const result = `Result (${filter.length})`
    
    return (
        <div>
            {clear ? 
            (<div>
            <div className={ProductsStyle.navigation}>
                <button 
                className = {ProductsStyle.clear}
                onClick = {() => {
                    setClear(false)
                }}>
                FILTER </button>
                <Search searchVal={searchVal} handleSearch = {handleSearch}/>
            </div>
            <Divider style = {{margin: '0px 40px'}} />
            <div style = {{margin: "0 80px"}}>
                <p style = {{margin: '20px 28px'}}> OUR LATEST SHOOTS </p>
                <List list = {items} />
            </div>
            </div>
            ) :
            (
            <div>
            <div className='filter' style = {{display: "flex", flexDirection: "row", margin: "0px 28px"}}>
            <Filter 
            categoryIndex={categoryIndex}
            handleCategory={handleCategory}
            price={price}
            handlePrice={handlePrice}
            sortIndex = {sortIndex}
            handleSort = {handleSort}
            searchVal = {searchVal}
            handleSearch = {handleSearch}
            clearFilters = {clearFilters}
            />
            <div style={{flex: '8'}}>
            
            {filter.length > 0 ? <List list = {filter} clear = {clear}/> : 
            <div>
                {clear == false && 
                <div style={{margin: '10px'}}>
                    <Typography variant = 'h6'>
                        {result}
                    </Typography>
                    <Divider />
                </div>}
                <p> No results found </p>
            </div>}
            </div>
            </div>
            </div>
            )
            }
        </div>
        
    )
}

export default Products
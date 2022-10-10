import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../context/context'
import { Divider, Typography } from '@mui/material'

const List = ({list, clear}) => {
    console.log(list)
    // const [openProduct, setOpenProduct] = useState(false)
    const {itemId, setItemId} = useContext(StoreContext)
    const result = `Result (${list.length})`
    return (
        <div>
        {clear == false && 
        <div style={{margin: '10px'}}>
            <Typography variant = 'h6'>
                {result}
            </Typography>
            <Divider />
        </div>}
        <div className='items' style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "20px", margin: '0px 24px'}}>
            {list.length > 0 && list.map((pr) => {
                let i = pr['id']
                let path = `/product/${i}`
                return (
                    <div className='d-flex flex-row'>
                        <img src={pr.model} style={{ width: "70%", height: "70%", borderRadius: "4px" }} />
                        <Typography style = {{margin: "4px"}}> {pr.title} </Typography>
                        <Typography style = {{margin: "4px"}}> $ {pr.price} </Typography>
                        <div className="options-btn" style = {{display: "flex", flexDirection: "column"}}>
                            <Link to={path}>
                            <button 
                            style = {{backgroundColor: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "40px"}}
                            onClick = {()=> setItemId(i)}
                            > See more </button>
                            </Link>
                            
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default List
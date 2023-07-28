import useFetch from './HttpHooks/useFetch'
import classes from './Dropdown.module.css'
//import { useState } from 'react'
function Dropdown(props) {
    const fetchedData = useFetch()
    
    const hotelChangeHandler = (event) =>{
        props.selectedHotelName(event.target.value)
    }

    return (
        <div className={classes.dropdown}>
                        <select value={props.initialValue} className={classes.selectField} onChange={hotelChangeHandler} id="bookedHotel" name="hotelName">
                            <option value='notSelected'>{props.initialValue}</option>
                {fetchedData.map((hotel) => {
                    return <option key={hotel.name} value={hotel.name}> {hotel.name}</option>
                })}
            </select>
        </div>
    )
}
export default Dropdown
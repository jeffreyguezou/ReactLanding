import classes from './BookRooms.module.css'
import Dropdown from './Dropdown'
import { useEffect, useState } from 'react'
import ConfirmBooking from './ConfirmBooking'
function BookRooms() {
    const [checkinDate, setcheckinDate] = useState('')
    const [checkoutDate, setcheckoutDate] = useState('')
    const [numOfRooms, setnumOfRooms] = useState('1')
    const [hotelSelected, sethotelselected] = useState('--select--');
    const [dataValidity, setDataValidity] = useState(false)
    const [showModal, setShowModal] =  useState(false)

    let d1, d2
    const checkinHandler = (event) => {
        setcheckinDate(event.target.value)
    }
    const checkoutHandler = (event) => {
        setcheckoutDate(event.target.value)
    }
    const hotelSelectHandler = (selectedHotel) => {
        sethotelselected(selectedHotel)
    }
    const daysChangeHandler = (event) => {
        setnumOfRooms(event.target.value)
    }

    const bookingEnquiry = {
        hotel: hotelSelected,
        from: checkinDate,
        to: checkoutDate,
        rooms: numOfRooms,
    }
    const isEmpty = value => value.trim() === ''
    const isDateValid = (checkin, checkout) => {
        d1 = new Date(checkin)
        d2 = new Date(checkout)
        if (d1 > d2) {
            return false
        }
        else return true
    }
    /*  const isPast = (date) => {
         const current = new Date();
         console.log(current)
         let inputDate = new Date(date)
         console.log(inputDate)
         if (current > inputDate) {return true}
         else return false
     } */
    const isHotelInputValid = (hotelSelected!=='--select--')
    const isCheckinInputValid = !isEmpty(checkinDate)
    //const isCheckinPast = isPast(checkinDate)
    const isCheckOutInputValid = !isEmpty(checkoutDate)
    //const isCheckOutPast = isPast(checkoutDate)
    const areDatesValid = isDateValid(checkinDate, checkoutDate)



    useEffect(() => {
        setDataValidity(isHotelInputValid && isCheckinInputValid && isCheckOutInputValid && areDatesValid)
    }, [isHotelInputValid, isCheckinInputValid, isCheckOutInputValid, areDatesValid])

    const bookHandler = async () => {
        console.log(dataValidity)
        if (!dataValidity) {
            if (!isHotelInputValid) alert('Select a hotel')
            else if (!isCheckinInputValid) alert('Check-in date cannot be empty')
            else if (!isCheckOutInputValid) alert('Check-out date cannot be empty')
            else if (!areDatesValid) alert('Check-in date cannot be earlier than check-out date')
            return
        }
        else {
            console.log(bookingEnquiry)
            setShowModal(true)
        }
    }
    const modalCloseHandler = ()=>{
        setShowModal(false)
        setcheckinDate('')
        setcheckoutDate('')
        sethotelselected('--select--')
        setnumOfRooms('1')
        setDataValidity(false)

    }
    return (
        <>
            {showModal && <ConfirmBooking onModalClose={modalCloseHandler} booking={bookingEnquiry} />}
            
                <div className={classes.bookingSection}>
                    <label className={classes.bookingLabels} htmlFor='fromDate'>Check-in</label>

                    <input
                        className={classes.inputFields}
                        type='date'
                        value={checkinDate}
                        onChange={checkinHandler}
                        min={new Date().toISOString().split('T')[0]}>

                    </input>
                    <label className={classes.bookingLabels} htmlFor='toDate'>Check-out</label>
                    <input className={classes.inputFields}
                        type='date'
                        value={checkoutDate}
                        onChange={checkoutHandler}
                        min={new Date().toISOString().split('T')[0]}>

                    </input>

                    <label className={classes.bookingLabels} htmlFor='rooms'>Rooms</label>
                    <input onChange={daysChangeHandler} className={classes.inputFields} type='number' min='1' step='1' value={numOfRooms}></input>

                    <label className={classes.bookingLabels} htmlFor='bookedHotel'>Hotel</label>
                    <Dropdown initialValue={hotelSelected} selectedHotelName={hotelSelectHandler} />
                    <div className={classes.btnSection}>
                        <button className={classes.bookBtn} onClick={bookHandler}>Book Now</button>
                    </div>
                </div>
        </>

    )
}
export default BookRooms
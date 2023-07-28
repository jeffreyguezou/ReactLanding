import Modal from '../UI/Modal'
import classes from './ConfirmBooking.module.css'
import { useRef, useState } from 'react'
const ConfirmBooking = (props) => {
    const nameRef = useRef('')
    const numberRef = useRef('')
    const [mobileInput, setMobileInput] = useState('')

    const bookHandler = async () => {
        let name = nameRef.current.value;
        let mobile = numberRef.current.value
        
        if (name.trim() === '') alert('Enter a valid name')
        else if (mobile.trim().length !== 10) alert('Mobile number must be 10 digits')

        else {
            const bookingObject = {
                name: name,
                mobile: mobile,
                hotel: props.booking.hotel,
                rooms: props.booking.rooms,
                from: props.booking.from,
                to: props.booking.to,
            }
            const response = await fetch('https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Enquiries.json', {
                method: 'POST',
                body: JSON.stringify(bookingObject)
            })
            console.log(bookingObject)
            const data = await response.json();
            console.log(data)
            if (data) alert('Booking successful. Our representative will contact you')  
            props.onModalClose()         
        }
        console.log(name, mobile)

    }

    const mobileChangeHandler = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setMobileInput(event.target.value)
        }
    }

    return (<Modal onModalClose={props.onModalClose}>
        <div className={classes.form}>
            <span className={classes.formTitle}>Confirm Details</span>
            <div className={classes.formEntry}>
                <span className={classes.formLabel}>Hotel</span><span className={classes.formData}>{props.booking.hotel}</span>
            </div>
            <div className={classes.formEntry}>
                <span className={classes.formLabel}>Rooms</span><span className={classes.formData}>{props.booking.rooms}</span>
            </div>

            <div className={classes.formEntry}>
                <span className={classes.formLabel}>From</span><span className={classes.formData}>{props.booking.from}</span>
            </div>

            <div className={classes.formEntry}>
                <span className={classes.formLabel}>To</span><span className={classes.formData}>{props.booking.to}</span>
            </div>
            <div className={classes.BorderDiv}></div>
            <div className={classes.details}>
                <label className={classes.confirmLabel} htmlFor='Name'>Name</label>
                <input className={classes.confirmText} ref={nameRef} type='text' />
                <label className={classes.confirmLabel} htmlFor='Mobile'>Mobile</label>
                <input className={classes.confirmText} onChange={mobileChangeHandler} value={mobileInput} ref={numberRef} type='text' />
            </div>

        </div>
        <div className={classes.modalActions}>
            <button className={classes.actionButtons} onClick={bookHandler}>Book Now</button>
            <button className={classes.actionButtons} onClick={props.onModalClose}>Close</button>
        </div>
    </Modal>
    )
}
export default ConfirmBooking
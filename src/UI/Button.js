import classes from './Button.module.css'
function Button() {
    return (
        <div className={classes.btnSection}>
            <button className={classes.bookBtn}>Book Now</button>
        </div>
    )
}
export default Button
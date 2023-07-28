import classes from './Button.module.css'
function Button() {
    return (
        <div className={classes.btnSection}>
            <button className={classes.bookBtn}>Explore</button>
        </div>
    )
}
export default Button
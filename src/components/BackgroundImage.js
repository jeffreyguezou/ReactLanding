import classes from './BackgroundImage.module.css'
import BookRooms from './BookRooms'
function BGImage(){
    return(
        <div className={classes.background}>
            <BookRooms />
        </div>
    )
}
export default BGImage
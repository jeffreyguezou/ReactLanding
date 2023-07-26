import image1 from '../Assets/pexels-amar-saleem-70441 (1).jpg'
/* import image2 from '../Assets/pexels-suhel-vba-3659683 (1).jpg'
import image3 from '../Assets/pexels-martin-péchy-2844474 (1).jpg' */
import classes from './ImageCarousel.module.css'
function ImageCarousel(){
    return(
        <div className={classes.eventImage}>
            <img src={image1} alt="eventImage"></img>
            {/* <img src={image2} alt="eventImage"></img>
            <img src={image3} alt="eventImage"></img> */}
        </div>
    )
}
export default ImageCarousel
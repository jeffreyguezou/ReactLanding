import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../Assets/pexels-amar-saleem-70441 (1).jpg'
 import image2 from '../Assets/pexels-suhel-vba-3659683 (1).jpg'
import image3 from '../Assets/pexels-martin-péchy-2844474 (1).jpg'
import classes from './ImageCarousel.module.css'
function ImageCarousel(){
    return(
        <div className={classes.eventImage}>
            <AliceCarousel>
            <img src={image1} alt="eventImage" className={classes.sliderimg}></img>
            <img src={image2} alt="eventImage" className={classes.sliderimg}></img>
            <img src={image3} alt="eventImage" className={classes.sliderimg}></img>
            </AliceCarousel>
        </div>
    )
}
export default ImageCarousel
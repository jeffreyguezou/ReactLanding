import HotelDetail from './HotelDetails'
import useFetch from "./HttpHooks/useFetch"
import Title from '../UI/Title'
import classes from './About.module.css'
function OurHotels() {
    const hotels = useFetch()

    return (
        <>
            <div className={classes.aboutSection}>
                <Title className={classes.title} title="OUR HOTELS" />

                {hotels.map((hotel) => {
                    return <HotelDetail key={hotel.name}
                     name={hotel.name} 
                     description={hotel.description}
                     location={hotel.location}/>
                })}


            </div>

        </>
    )
}
export default OurHotels
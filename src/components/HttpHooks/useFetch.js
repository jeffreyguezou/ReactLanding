import { useEffect, useState } from "react"

function useFetch(){
    const [hotel, setHotel] = useState([])
    useEffect(()=>{
        const hotels =[]
        const hotelResponse = async ()=>{
            const response = await fetch('https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Hotels.json')
           
            const fetchedHotels = await response.json()
           
            
            for(const key in fetchedHotels){
                hotels.push({
                    name: fetchedHotels[key].Name,
                    location: fetchedHotels[key].Location,
                    image: fetchedHotels[key].image,
                    description: fetchedHotels[key].Description,
                })
            }
            setHotel(hotels)
            
        }
        hotelResponse()

    },[])       
    
   
    return hotel
    
}
export default useFetch
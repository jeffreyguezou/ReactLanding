import { useState } from "react";
import Title from "../UI/Title"
import classes from './About.module.css'
function Events() {
    const [eventDesc, setEventDesc] = useState("")
    const sectionData = async () => {
        const response = await fetch('https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Sections.json')
        const responseData = await response.json();
        if(response){
            const events = (responseData.Events.Description)
            setEventDesc(events)
        }
        
    }
    sectionData()
    return (
        <div className={classes.aboutSection}>
            <Title className={classes.title} title="EVENTS" />
            <div className={classes.content}>
                <span>{eventDesc}</span>
            </div>
        </div>
    )

}
export default Events
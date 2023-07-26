import { useState } from "react";
import Title from "../UI/Title"
import classes from './About.module.css'
function About() {
    const [desc, setDesc] = useState("")
    const sectionData = async () => {
        const response = await fetch('https://landingpage-f89f0-default-rtdb.europe-west1.firebasedatabase.app/Sections.json')
        const responseData = await response.json();
        if(response){
            const description = (responseData.About.Description)
            setDesc(description)
        }
        
    }
    sectionData()
    return (
        <div className={classes.aboutSection}>
            <Title className={classes.title} title="ABOUT" />
            <div className={classes.content}>
                <span>{desc}</span>
            </div>
        </div>
    )

}
export default About
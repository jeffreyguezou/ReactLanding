import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import classes from './Footer.module.css'
function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footerSection}>
                <label className={classes.footerLabel}>Follow us</label>
                <a href="https://www.instagram.com/"><BsInstagram style={{ paddingLeft: '10px', cursor: 'pointer' }} /></a>
                <a href='https://twitter.com/'><BsTwitter style={{ paddingLeft: '10px', cursor: 'pointer' }} /></a>
                <a href="https://www.facebook.com/"><BsFacebook style={{ paddingLeft: '10px', cursor: 'pointer' }} /></a>



            </div>
            <div className={classes.footerSection}>
                <AiOutlineMail />
                <span className={classes.footerLabel}>Enquiries@hotel.com</span>
                <AiOutlinePhone />
                <span className={classes.footerLabel}>+91-9876543210</span>
            </div>
            <div className={classes.footerSection}>
                <SlLocationPin />
                <label className={classes.footerLabel}>Our Locations</label>
            </div>
        </div>
    )
}
export default Footer
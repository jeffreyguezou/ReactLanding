import Header from "./Header";
import BGImage from "./BackgroundImage";
import About from "./About";
import Events from "./Events";
import OurHotels from "./OurHotels";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
function MainPage() {
    return (
        <>
            <Header />
            <BGImage />
            <About />
            <OurHotels />
            <Events />
            <ImageCarousel />
            <Footer />
        </>
    )
}
export default MainPage
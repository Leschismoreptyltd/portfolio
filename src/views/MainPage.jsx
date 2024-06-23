import QuoteGen from "../components/cards/QuoteGen";
import DateTime from "../components/cards/DateTime";
import AboutMe from "../components/cards/AboutMe";
import bgImage from "../assets/Background/bg-earth-stone.jpg"
import FlipClock from "../components/cards/FlipClock";
const MainPage = () => {

    return(
        <>
        <div className="absolute w-full">

            {/*Background I changed this*/}
            <div className="w-full absolute">

            {/*Background Image */}
                <img 
                src={bgImage}
                className="opacity-15   "  
                alt="" />
            </div>

            <div className="flex flex-wrap">

                {/**Quote Generator */}
                <div className=" flex w-2/3 bg-navbarBg opacity-4">
                    <QuoteGen/>
                </div>

                <div className="flex w-1/3">
                    <FlipClock/>
                </div>

                {/*About Me */}
                <div className="flex w-full bg-navbarBg opacity-4">
                    <AboutMe/>
                </div>

            </div>

            
        </div>
        <h1>This is the main view</h1>
        </>
    )
}

export default MainPage;
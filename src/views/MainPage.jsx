import QuoteGen from "../components/cards/QuoteGen";
import AboutMe from "../components/cards/AboutMe";
import bgImage from "../assets/Background/bg-earth-stone.jpg";
import FlipClock from "../components/cards/FlipClock";
import GptFlipClock from "../components/cards/GptFlipClock";
const MainPage = () => {

    return(
        <>
        <div className="w-full before:bg-custom-bg before:content-[] ">
           
            
            <div className="flex flex-wrap">

                {/**Quote Generator */}
                <div className=" flex w-2/3 bg-inherit opacity-4">
                    <QuoteGen/>
                    
                </div>

                <div className="flex w-1/3 bg-inherit opacity-4">
                    <FlipClock/>
                </div>

                {/*About Me */}
                <div className="flex w-full bg-inherit opacity-4">
                    <AboutMe/>
                </div>

            </div>

            
        </div>
        <h1>This is the main view</h1>
        </>
    )
}

export default MainPage;
import QuoteGen from "../components/cards/QuoteGen";
import AboutMe from "../components/cards/AboutMe";
import bgImage from "../assets/Background/bg-earth-stone.jpg";
import FlipClock from "../components/cards/FlipClock";
import DateFragment from "../components/fragments/DateFragment";
const MainPage = () => {

    return(
        <>
        <div className="w-full before:bg-custom-bg">
           
            
            <div className="flex flex-wrap w-full">

                {/**Quote Generator */}
                <div className=" flex w-2/3 bg-inherit ">
                    <QuoteGen/>
                    
                </div>

                <div className="ml-12 flex flex-col w-3/8 place-content-center place-items-center gap-3">
                    
                    <DateFragment/>
                    <FlipClock/>
                   
                </div>

                {/*About Me */}
                <div className="flex w-full">
                    <AboutMe/>
                </div>

            </div>

            
        </div>
        <h1>This is the main view</h1>
        </>
    )
}

export default MainPage;
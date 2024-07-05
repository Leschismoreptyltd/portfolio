import QuoteGen from "../components/cards/QuoteGen";
import AboutMe from "../components/cards/AboutMe";
import DateFlipClock from "../components/cards/DateFlipClock";
import QualAchiev from "../components/cards/QualAchiev";
import Projects from "../components/cards/Projects";
const MainPage = () => {

    return(
        <>
        <div className={`w-full bg-custom-bg pb-4`}>
           
            {/* First row of the page */}
            <div className={`flex flex-wrap w-full gap-x-16 pt-3 pl-5`}>

                {/**Quote Generator */}
                <div className=" flex w-2/3 bg-white opacity-85 rounded-xl">
                    <QuoteGen/>
                    
                </div>
                {/* Flip Clock */}
                <div className=" flex w-3/8 bg-white opacity-85 rounded-xl">
                    
                    <DateFlipClock/>
                   
                </div>
            </div>
            {/* Second row of the page */}
            <div className="flex flex-wrap w-full mt-3 px-5 justify-between">

                {/*About Me */}
                <div className=" flex w-7/12 bg-white opacity-85 rounded-xl">
                    <AboutMe/>
                </div>

                {/* Qulifications and achievments  */}
                <div className=" flex w-4/12 bg-white opacity-85 rounded-xl">
                    <QualAchiev/>

                </div>

            </div>

            {/* Third row of the page */}
            <div className="flex flex-wrap w-full pt-3 px-5">
                <div className="flex w-full bg-white opacity-85 rounded-xl">
                    <Projects/>

                </div>

                

            </div>

            
        </div>
        </>
    )
}

export default MainPage;
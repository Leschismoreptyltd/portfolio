import FlipClock from "./FlipClock";
import DateFragment from "../fragments/DateFragment";
const DateFlipClock = () =>{

    return(
        <>
            <div className="flex flex-col gap-1 m-3 w-full border-4 border-gray-300 p-4">

                <DateFragment/>
                <FlipClock/>

            </div>  

        </>
    )
}

export default DateFlipClock;
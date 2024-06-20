import {useState, useEffect} from "react";
const DateTime =() => {
    const [date, setDate] = useState([])
    const [time, setTime] = useState()
    
    
    useEffect(() => {
        const dateTimeTemp = new Date()
        const dateString = dateTimeTemp.toDateString().split(" ")
        const hours = dateTimeTemp.getHours() < 10 ? `0${dateTimeTemp.getHours()}` : dateTimeTemp.getHours();
        const minutes = dateTimeTemp.getMinutes() < 10 ? `0${dateTimeTemp.getMinutes()}` : dateTimeTemp.getMinutes();
        const timeString = `${hours}:${minutes}`;
        console.log("Time: ",timeString);
        console.log("Date: ", date)
        
     setDate(dateString);
     setTime(timeString)
    },[])
    return(
        <>
        <div className=" m-3 w-full border-4 border-slate-400 p-4 bg-inherit ">
        {time}
        {date}
        

        </div>
        </>
    )

}

export default DateTime;
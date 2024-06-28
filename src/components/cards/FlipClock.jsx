import "../../styleSheets/flipClock.css";
import { useEffect, useState, useRef } from "react";
import FlipUnit from "../../API/clockFlipUnit";

const FlipClock = (props) =>{

  /*=========================
        Filp Mechanics
  ==========================*/ 

    const [flipped, setFlipped] = useState(false);
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    const [previousTime, setPreviousTime] = useState(new Date());
    const[hour, setHour] = useState([])
    const [minute, setMinute] = useState([]);
    const [second, setSecond] = useState([]);
  

      const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return [hours, minutes, seconds];
      };
      

  useEffect(() => {
    const intervalId = setInterval(() => {

      updateTime(new Date());
      setTime(new Date());
      setFlipped(prevFlipped => !prevFlipped);
      test
      

    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const updateTime = (time) => {
    const [hours, minutes, seconds] = formatTime(time)
    
    //updating hour-first card
    if(hours[1] + minutes + seconds == 0) {

      console.log("Update hourFirst");
    }
    //updating hour-last card
    if (minutes + seconds == 0) {

      console.log("Update hourLast");
    }
    //updating minute-first card
    if(minutes[1] + seconds == 0) {
      
      console.log("Updating minuteFirst");
    }
    //updating minute-last card
    if(seconds == 0){

      console.log("Updating minuteLast");
    }
    //Updating second-first card
    if(seconds[1] == 0){

      console.log("Updating secondFirst");
    }
    
    //Updating second-last card
    console.log("updating secondLast");
    console.log(hours, minutes, seconds);
  }

    /* const updateNumber = () => {
      
    }  */

      //const currentFormattedTime = formatTime(time);
      //const previousFormattedTime = formatTime(previousTime);

      const test = () => {
        console.log("I was trying to access the elements from here. Look into useRef for accessing more than one element. ");
        console.log(flipped)
      }
      
   
    return(
        <>
        <div className="flip-clock-container w-full border-4 border-slate-400 p-4">
        <button className={`pr-5 border-2 border-black ${flipped? "turn-black" : " "}`} onClick={test}>Test</button>

          <div className="clock">

            <div className={`card js-hour-first `}>
              <div className="panel panel-top panel-in--shadow">
                {/*Set in the update number after time has been updated */}
                <span className="number">{formatTime(time)[0][0]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                {/*Set in the update number after time has been updated */}
                <span className="number number--btm">{formatTime(time)[0][0]}</span>
              </div>
              <div className="panel panel-top panel-out">
                {/*Set in the initial time value */}
                <span className="number">{formatTime(time)[0][0]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                {/*Set in the initial time value */}
                <span className="number number--btm">{formatTime(time)[0][0]}</span>
              </div>
            </div>

            <div className="card js-hour-last">
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{formatTime(time)[0][1]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{formatTime(time)[0][1]}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{formatTime(time)[0][1]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{formatTime(time)[0][1]}</span>
              </div>
            </div>

            <p>Hours</p>

            <div className="card js-minute-first">
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{formatTime(time)[1][0]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{formatTime(time)[1][0]}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{formatTime(time)[1][0]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{formatTime(time)[1][0]}</span>
              </div>
            </div>

            <div className="card js-minute-last">
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{formatTime(time)[1][1]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{formatTime(time)[1][1]}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{formatTime(time)[1][1]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{formatTime(time)[1][1]}</span>
              </div>
            </div>

            <p>Minutes</p>

            <div className={`card js-second-first ${flipped? "js-transition-card" : " "}`}>
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{formatTime(time)[2][0]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{formatTime(time)[2][0]}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{formatTime(time)[2][0]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{formatTime(time)[2][0]}</span>
              </div>
            </div>

            <div className={`card js-second-last ${flipped? "js-transition-card" : " "}`}>
              <div className="panel panel-top panel-in--shadow">
                <span className="number">{formatTime(time)[2][1]}</span>
              </div>
              <div className="panel panel-btm panel-in">
                <span className="number number--btm">{formatTime(time)[2][1]}</span>
              </div>
              <div className="panel panel-top panel-out">
                <span className="number">{formatTime(time)[2][1]}</span>
              </div>
              <div className="panel panel-btm panel-out--shadow">
                <span className="number number--btm">{formatTime(time)[2][1]}</span>
              </div>
            </div>

            <p>Seconds</p>

          </div>
        </div>
        </>
    )

}

export default FlipClock;

const FlipClockSecondLast = (props) => {
    const numberFirst = props.numberInput[0];
    const numberLast = props.numberInput[1];
    const cardName = props.cardName;
    const prevNumberFirst = numberFirst - 1 == -1? 0 : numberFirst - 1 ;
    const prevNumberLast = numberLast - 1 == -1 ? 0 : numberLast - 1 ; 
    console.log("First Second Flipped: ", props.flipped[0]);

    return(
      <>
      {/*Second First */}
      <div className={`card js-${cardName} ${props.flipped? "js-transition-card" : " "} font-bebasNeue`}>
            <div className="panel panel-top panel-in--shadow">
              <span className="number">{numberFirst}</span>
            </div>
            <div className="panel panel-btm panel-in">
              <span className="number number--btm">{numberFirst}</span>
            </div>
            <div className="panel panel-top panel-out">
              <span className="number">{prevNumberFirst}</span>
            </div>
            <div className="panel panel-btm panel-out--shadow">
              <span className="number number--btm">{prevNumberFirst}</span>
            </div>
          </div>
      {/*Seconds Last */}
      <div className={`card js-${cardName} ${props.flipped? "js-transition-card" : " "} font-bebasNeue`}>
            <div className="panel panel-top panel-in--shadow">
              <span className="number">{numberLast}</span>
            </div>
            <div className="panel panel-btm panel-in">
              <span className="number number--btm">{numberLast}</span>
            </div>
            <div className="panel panel-top panel-out">
              <span className="number">{prevNumberLast}</span>
            </div>
            <div className="panel panel-btm panel-out--shadow">
              <span className="number number--btm">{prevNumberLast}</span>
            </div>
          </div>
      </>
  )}

export default FlipClockSecondLast;

const FlipClockSecondFirst = (props) => {
    const numberFirst = props.numberInput;
    const cardName = props.cardName;
    const prevNumber = number - 1 == -1? 0 : number - 1 ; 

    return(
      <>
      <div className={`card js-${cardName} ${props.flipped? "js-transition-card" : " "} font-bebasNeue`}>
            <div className="panel panel-top panel-in--shadow">
              <span className="number">{number}</span>
            </div>
            <div className="panel panel-btm panel-in">
              <span className="number number--btm">{number}</span>
            </div>
            <div className="panel panel-top panel-out">
              <span className="number">{prevNumber }</span>
            </div>
            <div className="panel panel-btm panel-out--shadow">
              <span className="number number--btm">{prevNumber}</span>
            </div>
          </div>
      </>
  )}

export default FlipClockSecondFirst;
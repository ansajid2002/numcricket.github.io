
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Newgame = () => {

  const { restart, runs, rnum, isOut, isAlive, rone, rtwo, rthree, rfour, rsix, norun, wicket, save } = useGlobalContext()

  

  return (



    <div className="ng">

      <div className="ng-info">
        <div >Runs:{runs} </div>
        <div >Wickets:{wicket}</div>

      </div>
      <div className="ng-main">
        <div className="ng-you">
          <h1 className="ng-heading">YOU</h1>
          <div className="ng-buttons">
            <button className="rbutton" onClick={isAlive ? rone : norun}>1</button>
            <button className="rbutton" onClick={isAlive ? rtwo : norun}>2</button>
            <button className="rbutton" onClick={isAlive ? rthree : norun}>3</button>
            <button className="rbutton" onClick={isAlive ? rfour : norun}>4</button>
            <button className="rbutton" onClick={isAlive ? rsix : norun}>6</button>
          </div>
        </div>
        <div className="ng-computer">
          <h1 className="ng-heading">COMPUTER</h1>

          {isOut ? <p className='ng-out'>OUT!</p> :
            <div className="ng-choice">
              <p className="ng-choice-text">computer's choice :</p>
              <p className='ng-choice-num'>{rnum}</p>
            </div>}



        </div>
      </div>
      <div className='ng-footer'>
        <button className="ng-restart" onClick={restart}>RESTART</button>

        {isAlive ?
          <button  className="ng-back" onClick={restart} ><Link className="ng-link" to="/">BACK</Link></button>
          :
          <button onClick={save} className="ng-back ng-save" >SAVE</button>
        }
      </div>

    </div>

  )
}

export default Newgame
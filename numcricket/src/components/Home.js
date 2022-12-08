import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Home = () => {

  const { num } = useGlobalContext()



  return (
    <div className="home-container">
      <h1 className="home-heading">NumCricket {num}</h1>
      {/* <button >NEW GAME</button>
        <button>HIGHSCORE</button> */}
      <div className="trans-btn"><Link className="trans-text" to="/newgame">NEW GAME</Link></div>
      <div className="trans-btn"><Link className="trans-text" to="/highscore">HIGHSCORE</Link></div>
    </div>
  )
}

export default Home
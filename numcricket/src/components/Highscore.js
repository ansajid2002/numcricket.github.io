import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context';

const Highscore = () => {
  
  const {reset} = useGlobalContext()

  var archive = [];
  for (var i = 0; i<localStorage.length; i++) {
      archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
  }
  
  function compare( a, b ) {
    if ( a.runs > b.runs ){
      return -1;
    }
    if ( a.runs < b.runs ){
      return 1;
    }
    return 0;
  }
  archive.sort( compare );
  let newArchive = archive.splice(0,10)
  console.log(newArchive)

  const display = newArchive.map((item,index) => {
    return (<>
    
    
      <div className='h-score'> {index + 1}] Score : <span className='ss'>{localStorage.length > 0 && item.runs}</span></div>
    
      </>
    )
  })

  return ( 
    <div className ="borders">
      <h1 className="h-heading">HIGHSCORES</h1>
        {display}

    
    <div className='h-foot'>
    <div className='bb'><Link className='close' to="/">BACK</Link></div>
    <button className="reset" onClick={reset}>RESET</button>
    </div>
    

  
    </div>
  )
}

export default Highscore



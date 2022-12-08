import "./App.css"
import ContextPro from "./context"
import Home from "./components/Home";
import Highscore from "./components/Highscore";
import Newgame from "./components/Newgame";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ContextPro>

    <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/newgame" element = {<Newgame/>} />
        <Route path = "/highscore" element = {<Highscore/>} />
      </Routes>
      
    </ContextPro>
    </BrowserRouter>
    
  );
}

export default App;

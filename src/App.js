import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from "./home";
import MovieDetails from "./moviedetails";

function App() {
  return(
  <Routes>

    <Route  path="/"  element= {<Home/>}/>
    <Route path="/:id" element= {<MovieDetails/>}/>

  </Routes>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css"
import Grid from "./components/Grid/Grid";
import React from "react"

function App() {
    const [res, setRes] = React.useState([]);
  return (
    <div className="App">
      <Navbar res={res} setRes={setRes}/>
        <Grid res={res} />
    </div>
  );
}

export default App;

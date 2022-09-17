import data from "./data/data"
import LocationCard from "./components/LocationCard";
import Nav from "./components/Nav";
import "./App.css"

const App = () => { 
  const cards = data.map((object) => <LocationCard data = {object}/>)
  return (
    <div className="app">
      <Nav />
      <div className="card-list">
        {cards}
      </div>
    </div>
  ) 
} 

export default App; 

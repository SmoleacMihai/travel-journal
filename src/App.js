import data from "./data/data"
import LocationCard from "./components/LocationCard";

const App = () => { 
  const cards = data.map((object) => <LocationCard data = {data}/>)
  return (
    <>
      {cards}
    </>
  ) 
} 

export default App; 

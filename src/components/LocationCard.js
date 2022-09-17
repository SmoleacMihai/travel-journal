const LocationCard = (props) => {
  return (
    <div className="location-card">
      <img className="location-card--img" src={props.data.imageUrl} alt="travel place"/>
      <div className="location-card--info">
      SOme text
      </div>
    </div>
  )
}

export default LocationCard;
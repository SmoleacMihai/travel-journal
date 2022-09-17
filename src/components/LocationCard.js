const LocationCard = (props) => {
  let country = props.data.location;
  country = country.toUpperCase();
  return (
    <div className="location-card">
      <img className="location-card--img" src={props.data.imageUrl} alt="travel place"/>
      <div className="location-card--info">
        <div className="location-card--gps">
          <img src="./images/gpsLogo.png" alt="gps logo"/>
          <span className="gps--country">{country}</span>
          <a href={props.data.googleMapsUrl} className="gps--google-maps-link">View on google Maps</a>
        </div>
        <div className="info--title">{props.data.title}</div>
        <div className="info--date">{props.data.startDate} - {props.data.endDate}</div>
        <div className="info--description">{props.data.description}</div>
      </div>
    </div>
  )
}

export default LocationCard;
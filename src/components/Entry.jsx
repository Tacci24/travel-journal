import React from "react";

function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img className="marker" src="/src/assets/marker.png" alt="Marker" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps</a>
        <h2 className="-title">{props.title}</h2>
        <p className="-dates">{props.dates}</p>
        <p className="-text">{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;

import React from 'react';

const GMap = (props) => {
  const mapLink = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${props.lat},${props.long}`;

  return (
    <div className="staticMap">
      <iframe title='map'
        frameBorder="0"
        style={{ border: 0 }}
        src={mapLink}
        allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default GMap;
window.GMap = GMap;
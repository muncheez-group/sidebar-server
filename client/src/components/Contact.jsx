import React from 'react';
import {Icon, Modal} from 'react-materialize';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {

    let tel = `tel:${this.props.phone}`;
    let store = this.props.name.split(' ').join('+');
    let navLink = `https://www.google.com/maps/dir/?api=1&destination=${store}&destination_place_id=${this.props.id}`;
    let modalLink = `https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCg69oq-jQ1pPQJZrO3KLNpfpjqsYKOTXo&center=-33.93051219811678,151.14070882797236&zoom=16&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360`
    let modalLInkprev = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDfVc7Wl0xQOdHnSm30Yk2lZtcBTPEZtjM&q=place_id:${this.props.id}`;
    
    return (
      <div className="contact">
        <Modal
          className="mapModal"
          trigger={<div className="address row">
                    <Icon className="contactIcon icons">location_on</Icon>
                    <span className="contactText">{this.props.address}</span>
                  </div>}
        >
          <div className="map">
            <iframe
              width="1000px"
              height="700px"
              frameBorder="0" 
              style={{border: 0}}
              src={modalLink}
              allowFullScreen
            >
            </iframe>
          </div>
        </Modal>
        <div className="phone row">
          <a href={tel} target="blank">
          <Icon className="contactIcon icons">phone</Icon>
          <span className="contactText">{this.props.phone}</span>
          </a>
        </div>
        <div className="website row">
          <a href={this.props.website} target="blank">
          <Icon className="contactIcon icons">web</Icon>
          <span className="contactText">{this.props.website}</span>
          </a>
        </div>
        <div className="directions row">
          <a href={navLink} target="blank">
          <Icon className="contactIcon icons">directions</Icon>
          <span className="contactText">Get Directions</span>
          </a>
        </div>
    </div>
    )
  }
}

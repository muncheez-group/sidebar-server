import React from 'react';
import {Icon} from 'react-materialize';

const Contact = ({address, phone, website, location}) => (
  <div className="contact">
    <div className="address col">
      <Icon className="contactIcon icons">location_on</Icon><span className="contactText">{address}</span>
    </div>
    <div className="phone col">
      <Icon className="contactIcon icons">phone</Icon><span className="contactText">{phone}</span>
    </div>
    <div className="website col">
      <Icon className="contactIcon icons">web</Icon><span className="contactText">{website}</span>
    </div>
    <div className="directions col">
      <Icon className="contactIcon icons">directions</Icon><span className="contactText">Get Directions</span>
    </div>
</div>
)

export default Contact;
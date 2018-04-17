import React from 'react';
import {Icon} from 'react-materialize';

const Booking = (props) => {

  return (
    <a href="www.google.com" target="_blank">
      <div className="btns">  BOOK WITH OPENTABLE  <Icon className="icons" right>event_available</Icon></div>
    </a>
  )
}

export default Booking;
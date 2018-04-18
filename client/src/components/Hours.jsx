import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-materialize';
import moment from 'moment';


const Hours = (props) => {
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  console.log(props.hours)

 
  // find current day
  let currDay = moment().weekday(); // Mon = 1, Tues = 2, etc.
  let currHours = props.hours.slice(currDay-1).concat(props.hours.slice(0, currDay-1));
  console.log(currHours)

  // check if now closed

  
  return ( 
    <div className="hours">
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">{currHours[0]}<Icon></Icon></div>
          <div className="collapsible-body">
            {currHours.slice(1).map(day => {
              <span>{day}</span>
            })}
          </div>
        </li>
      </ul>
    </div>
  )
}

// Hours.propTypes = {
//   hours: React.PropTypes.array.isRequired
// };

export default Hours;
import React from 'react';
import $ from 'jquery';
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

  // check if now closed


  console.log(currDay)
  return (
    <div className="hours">
      <ul className="collapsible">
        <li>
          <div className="collapsible-header">{currHours[0]}</div>
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
  
export default Hours;
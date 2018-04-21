import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-materialize';
import moment from 'moment';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currHours: [],
      toggleHours: false
    };

 
  };
  sortHours() {
    let currDay = moment().weekday(); // Mon = 1, Tues = 2, etc.
    let currHours = props.hours.slice(currDay-1).concat(props.hours.slice(0, currDay-1));
    console.log(currHours)
  }

  

  render() {

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
    );
  }
}
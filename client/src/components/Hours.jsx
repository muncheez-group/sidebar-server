import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-materialize';
import moment from 'moment';
import Collapsible from 'react-collapsible';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newHours: []
    };

 
  };
  sortHours() {
    let currDay = moment().weekday(); // Mon = 1, Tues = 2, etc.
    let currHours = this.props.hours.slice(currDay-1).concat(this.props.hours.slice(0, currDay-1));
    this.setState({
      newHours: currHours
    })
  }

  

  render() {
    const {newHours} = this.state;
    return ( 
      <Collapsible trigger={newHours[0]}>
        {newHours.slice(1).map(day => 
        <p>{day}</p>
        )}
      </Collapsible>
    );
  }
}
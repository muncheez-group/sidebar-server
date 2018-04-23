import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-materialize';
import moment from 'moment';
import {DropdownButton, DropdownButtonProps, MenuItem, Men} from 'react-bootstrap';



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
      <DropdownButton title="Default button" id="hoursdrop">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
    </DropdownButton>
    );
  }
}
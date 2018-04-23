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
    // this.sortHours = this.sortHours.bind(this)
 
  };

  // componentDidMount() {
  //   this.sortHours();
  // };

  // sortHours() {
  //   let currDay = moment().weekday(); // Mon = 1, Tues = 2, etc.
  //   let currHours = this.props.hours.slice(currDay-1).concat(this.props.hours.slice(0, currDay-1));
  //   this.setState({
  //     newHours: currHours
  //   })
  // }

  render() {
   return ( null
    // <Collapsible trigger="Start here">
    //   <p>This is the collapsible content. It can be any element or React component you like.</p>
    //   <p>It can even be another Collapsible component. Check out the next section!</p>
    // </Collapsible>
   )
  }
}
// import React from 'react';
// import {Icon, Collapsible, CollapsibleItem} from 'react-materialize';
// import moment from 'moment';

// export default class Hours extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       toggleHours: false,
//       sortedHours: []
//     };
//   };

//   componentDidMount() {
//     this.sortHours();
//   }

//   sortHours() {
//     // find current day
//     if (props.hours) {
//       let currDay = moment().weekday(); // Mon = 1, Tues = 2, etc.
//       let currHours = props.hours.slice(currDay-1).concat(props.hours.slice(0, currDay-1));
//       console.log(currHours)
//     }
//   }

  

//   render() {
//     console.log('RENDER', this.props.hours)

//     return (
//       <div className="hours">
//        Hours go here
//       </div>
//     );
//   }
// }


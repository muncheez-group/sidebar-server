import React from 'react';
import Menu from './Menu.jsx';
import Booking from './Booking.jsx';
import Hours from './Hours.jsx';
import Contact from './Contact.jsx';
import GMap from './GMap.jsx';
const axios = require('axios');


export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      place: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.getPlace = this.getPlace.bind(this);
  };
  componentDidMount() {
    this.getPlace('ChIJw3k8iZ5-hYARJSkLTdSXbls');
  };

  getPlace(id) {
    let context = this;
 
    axios.get(`/places/${id}`)
    .then((res) => {
      this.setState({
        place: res.data
      })
    })
    .catch((err) => console.log(err));
  };


  handleClick(e) {
    
  }

  render() {

    return (
      <div className="sidebar">
        <Menu  menuUrl={this.state.place.menu_url}/>
        <div className="greyBar"></div>
        <Booking />
        <div className="greyBar"></div>
        <div className="inSidebar">
          {/* <Hours place={this.state.place.hours}/> */}
          <Contact
            address={this.state.place.address} 
            phone={this.state.place.phone}
            website={this.state.place.url}
            location={this.state.place.location}
          />
          <GMap 
            location={this.state.place.location}
          />
        </div>
      </div>
    );
  }
}

window.Sidebar = Sidebar;
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
      isLoaded: false
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
        place: res.data,
        isLoaded: true
      })
      // console.log(this.state.place)
    })
    .catch((err) => console.log(err));
  };


  handleClick(e) {
    
  }

  render() {
    const { hours, address, phone, website, location, id, name, url, menu_url } = this.state.place;
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    }
    if (this.state.isLoaded) {
      return (
        <div className="sidebar">
          <Menu  menuUrl={menu_url}/>
          <div className="greyBar"></div>
          <Booking />
          <div className="greyBar"></div>
          <div className="inSidebar">
            <Hours hours={hours}/>
            <Contact
              address={address} 
              phone={phone}
              website={url}
              location={location}
              id={id}
              name={name}
            />
            <GMap 
              location={location}
            />
          </div>
        </div>
      );
    }
  }
}

window.Sidebar = Sidebar;
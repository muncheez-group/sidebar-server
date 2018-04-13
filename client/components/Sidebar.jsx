import React from 'react';

export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      place: {},
      toggleHours: false

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
  }

  render() {
    return (
      <div id="sidebar">
        <Menu />
        <Hours />
        <Contact />
        <Map />
      </div>
    );
  }
}


ReactDOM.render(<Sidebar/>, document.getElementById('app'));
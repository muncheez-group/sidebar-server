import React from 'react';
import {Icon} from 'react-materialize';

const Menu = (props) => {

  return (
    <a href={props.menuUrl} target="_blank">
      <div className="btns">  VIEW MENU  <Icon className="icons" right>restaurant</Icon></div>
    </a>
  )
}

export default Menu;

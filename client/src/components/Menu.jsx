import React from 'react';
import {Icon} from 'react-materialize';

const Menu = ({menuUrl}) => {

  return (
    <a href={menuUrl} target="_blank">
      <div className="btns">  VIEW MENU  <Icon className="icons" right>restaurant</Icon></div>
    </a>
  )
}

export default Menu;

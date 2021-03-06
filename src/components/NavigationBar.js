import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      <nav>
        <b>
          <Link to="/adminafterlogin">ADMIN HOME </Link> |
              <Link to="/displayall">DISPLAY ALL </Link>|
              <Link to="/search">SEARCH </Link> |
              <Link to="/delete">DELETE </Link>|
              <Link to="/logout">LOGOUT </Link>
        </b>
      </nav>
    )

  }
  else if (authuser === 'USER') {

  }
  else {
    return (
      <nav>
        <b>
          <Link to="/">HOME </Link> |
              <Link to="/reg">REG </Link>|
              <Link to="/login">LOGIN </Link> |
              <Link to="/about">ABOUT US </Link> |
              <Link to="/contact">CONTACT US </Link> |
              <Link to="/adminlogin">ADMIN LOGIN </Link>
        </b>
      </nav>
    )
  }
}

export default NavigationBar

import { FaUserCircle } from 'react-icons/fa';
import React, { Component } from 'react';

import './style.css'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1 className="brand">Facebook</h1>
        <div className="my-profile">
          <p>Meu perfil</p>
          <FaUserCircle size={26} color="#fff" />
        </div>
      </div>
    );
  }
}

export default Header;

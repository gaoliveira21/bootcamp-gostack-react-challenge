import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <h1 className="brand">Facebook</h1>
        <div className="my-profile">
          <p>Meu perfil</p>
        </div>
      </div>
    );
  }
}

export default Header;

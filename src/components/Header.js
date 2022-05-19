import React from 'react';
import '../App.css';
import logo from '../assets/logo.jpeg';

class Header extends React.Component {
  render() {
    return (
      <div className="container-header">
        <img src={ logo } alt="logo" />
      </div>
    );
  }
}

export default Header;

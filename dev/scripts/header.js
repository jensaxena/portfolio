import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper flexX">
          <img className="header__img--logo" src="/public/assets/images/logo-white-transparent-padded-60x60.png" alt="" />
          <img className="header__img--menu-collapse" src="/public/assets/menu-collapse.png" alt=""/>
        </div>
      </header>
    )
  }
}

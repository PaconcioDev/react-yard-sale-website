import React from "react";
import "../styles/header.scss"

const Header = () => {
  return (
    <nav>
      <img src="src/Icons/icon_menu.svg" className="menu" alt="menu" />
      <div className="navbar-left">
        <img className="logo" src="src/logos/logo_yard_sale.svg" alt="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="email">example@gmail.com</li>
          <li className="navbar-shopping-cart">
            <img src="src/Icons/icon_shopping_cart.svg" alt="Shopping Cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };

import "../../App.css";
import React, { useState, useEffect, useRef } from "react";
import "./styles/Header.css";

function Header({
  isHamburger,
  setHamburgerMenuOpen,
  isHamburgerMenuOpen,

  closeAllPopups,
}) {
  const dropmenu = useRef();
  console.log(dropmenu);

  const handleOverlayClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeAllPopups();
  };

  return (
    <>
      <header ref={dropmenu} className="header">
        {!isHamburger ? (
          <>
            <nav className="header__navigation">
              <h1 className="header__logo">Shortly</h1>
              <ul className="header__list">
                <li className="header__list-item">Features</li>
                <li className="header__list-item">Pricing</li>
                <li className="header__list-item">Resources</li>
              </ul>
            </nav>
            <div className="header__buttons">
              <button className="button button__without-background">
                Login
              </button>
              <button className="button button__with_background_green">
                Sign up
              </button>
            </div>
          </>
        ) : (
          <div className="header__mobile">
            <h1 className="header__logo">Shortly</h1>
            {!isHamburgerMenuOpen ?
            <button
              onClick={setHamburgerMenuOpen}
              className="header__hamburger"
            ></button>
            : <button className="header__hamburger-close" onClick={closeAllPopups}></button>}
          </div>
        )}
      </header>
      {isHamburgerMenuOpen && (
        <div onBlur={handleOverlayClose} className="header__popup">
          <nav className="header__navigation-mobile">
            <ul className="header__list header__list_status_mobile">
              <li className="header__list-item header__list-item_status_mobile">
                Features
              </li>
              <li className="header__list-item header__list-item_status_mobile">
                Pricing
              </li>
              <li className="header__list-item header__list-item_status_mobile">
                Resources
              </li>
              <div className="header__line"></div>
            </ul>
          </nav>
          <div className="header__buttons-mobile">
            <button className="button button__without-background button_theme_mobile">
              Login
            </button>
            <button className="button button_theme_green button__with_background_status__mobile button_theme_mobile">
              Sign up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

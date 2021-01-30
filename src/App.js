import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isHamburger, setHamburger] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const closeAllPopups = () => {
    setHamburgerMenuOpen(false);
  };

  const handleHamburgerMenuOpen = () => {
    setHamburgerMenuOpen(true);
  };

  const handleOverlayClose = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeAllPopups();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      setWindowSize(setWindowSize(window.innerWidth))
    );
    if (windowSize <= 512) {
      setHamburger(true);
    }
  }, []);

  return (
    <div className="App">
      <Header
        isHamburger={isHamburger}
        setHamburgerMenuOpen={handleHamburgerMenuOpen}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        handleOverlayClose={handleOverlayClose}
        closeAllPopups={closeAllPopups}
      />
      {windowSize}
    </div>
  );
}

export default App;

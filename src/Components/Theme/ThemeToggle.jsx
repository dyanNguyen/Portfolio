import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
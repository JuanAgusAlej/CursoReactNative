import React from 'react';
import classNames from 'classnames';
import {
  useThemeContext,
  useThemeToggleContext,
} from '../../providers/ThemeProvider';

const Header = () => {
  const setTheme = useThemeToggleContext();
  const theme = useThemeContext();

  const handleChange = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  console.log(theme);
  return (
    <div>
      <nav
        className={classNames('navbar', {
          'navbar-light bg-light bg-light': theme === 'light',
          'navbar-dark bg-dark bg-dark text-white': theme === 'dark',
        })}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
        <button className="btn-primary" onClick={() => setTheme('dark')}>
          Dark
        </button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={handleChange}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;

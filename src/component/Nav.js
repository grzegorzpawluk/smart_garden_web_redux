import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavStyles from './Nav.module.css';
import { Link } from 'react-router-dom';
import classes from 'classnames';

import { logoutUser } from './../features/login/loginSlice';

import BurgerIcon from './BurgerIcon';

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  const isLogged = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();

  const navStyle = {
    color: '#ffffff',
    fontSize: '22px',
    textDecoration: 'none',
  };

  const logout = () => {
    dispatch(logoutUser());
    setMenuToggle(!menuToggle);
  };

  if (!isLogged) {
    return (
      <nav>
        <div className={NavStyles.logo}></div>
        <ul
          className={
            menuToggle
              ? classes(NavStyles.open, NavStyles.navLinks)
              : NavStyles.navLinks
          }
        >
          <Link style={navStyle} to="/about">
            <li onClick={() => setMenuToggle(!menuToggle)}>O stronie</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li onClick={() => setMenuToggle(!menuToggle)}>Kontakt</li>
          </Link>

          <Link style={navStyle} to="/login">
            <li onClick={() => setMenuToggle(!menuToggle)}>Zaloguj</li>
          </Link>
        </ul>
        <BurgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </nav>
    );
  }
  return (
    <nav>
      <div className={NavStyles.logo}></div>
      <ul
        className={
          menuToggle
            ? classes(NavStyles.open, NavStyles.navLinks)
            : NavStyles.navLinks
        }
      >
        <Link style={navStyle} to="/weather">
          <li onClick={() => setMenuToggle(!menuToggle)}>Pogoda</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li onClick={() => setMenuToggle(!menuToggle)}>O stronie</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li onClick={() => setMenuToggle(!menuToggle)}>Kontakt</li>
        </Link>
        <Link style={navStyle} to="/">
          <li
            onClick={() => {
              logout();
            }}
          >
            Wyloguj
          </li>
        </Link>
      </ul>
      <BurgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </nav>
  );
}

export default Nav;

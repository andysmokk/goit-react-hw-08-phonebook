// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import s from './Navigation.module.css';
// import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

// import { HomePage } from '../../pages/HomePage';

export function Navigation() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();

  console.log(location.pathname);

  const getNavLinkClass = path => {
    return location.pathname === path ? 'navLink active' : 'navLink';
  };

  return (
    <Nav variant="tabs" className={s.nav}>
      <Nav.Item>
        <Nav.Link className={getNavLinkClass('/')} href="/">
          Home
        </Nav.Link>
      </Nav.Item>

      {/* {isLoggedIn ? (
        <NavLink className={s.navLink} to="/contacts">
          Contacts
        </NavLink>
      ) : null} */}
      <Nav.Item className={s.navRegister}>
        <Nav.Link
          className={getNavLinkClass('/register')}
          // eventKey="register"
          href="/register"
        >
          Registration
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          className={getNavLinkClass('/login')}
          // eventKey="login"
          href="/login"
        >
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

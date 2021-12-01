import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import s from './Navigation.module.css';

export function Navigation() {
  const location = useLocation();

  const getNavLinkClass = path => {
    return location.pathname === path ? 'active' : null;
  };

  return (
    <Nav variant="tabs" className={s.nav}>
      <Link to="/">
        <Nav.Link as="li" className={getNavLinkClass('/')} href="/">
          Home
        </Nav.Link>
      </Link>

      <Link to="/register" className={s.navRegister}>
        <Nav.Link
          as="li"
          className={getNavLinkClass('/register')}
          href="/register"
        >
          Registration
        </Nav.Link>
      </Link>

      <Link to="/login">
        <Nav.Link as="li" className={getNavLinkClass('/login')} href="/login">
          Login
        </Nav.Link>
      </Link>
    </Nav>
  );
}

import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import s from './Navigation.module.css';

export function Navigation() {
  const location = useLocation();

  const getNavLinkClass = path => {
    return location.pathname === path ? 'active' : null;
  };

  return (
    <Nav variant="tabs" className={s.nav}>
      <Nav.Item>
        <Nav.Link className={getNavLinkClass('/')} href="/">
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className={s.navRegister}>
        <Nav.Link className={getNavLinkClass('/register')} href="/register">
          Registration
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link className={getNavLinkClass('/login')} href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

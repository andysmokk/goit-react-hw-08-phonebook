import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { IoMdLogIn } from 'react-icons/io';
import { SiMonkeytie } from 'react-icons/si';
import { IoHome } from 'react-icons/io5';
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
          <IoHome className={s.icon} />
        </Nav.Link>
      </Link>

      <Link to="/register" className={s.navRegister}>
        <Nav.Link
          as="li"
          className={getNavLinkClass('/register')}
          href="/register"
        >
          Registration
          <SiMonkeytie className={s.icon} />
        </Nav.Link>
      </Link>

      <Link to="/login">
        <Nav.Link as="li" className={getNavLinkClass('/login')} href="/login">
          Login
          <IoMdLogIn className={s.icon} />
        </Nav.Link>
      </Link>
    </Nav>
  );
}

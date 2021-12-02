import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { IoHome } from 'react-icons/io5';
import { FaPowerOff, FaUserAstronaut, FaUsers } from 'react-icons/fa';

import s from './UserMenu.module.css';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const location = useLocation();

  const getNavLinkClass = path => {
    return location.pathname === path ? 'navLink active' : 'navLink';
  };

  return (
    <>
      <Nav variant="tabs" className={s.nav}>
        <Link to="/">
          <Nav.Link
            as="li"
            className={`${getNavLinkClass('/')} ${s.link}`}
            href="/"
          >
            Home
            <IoHome className={s.iconHome} />
          </Nav.Link>
        </Link>

        <Link to="/contacts">
          <Nav.Link
            as="li"
            className={`${getNavLinkClass('/contacts')} ${s.link}`}
            href="/contacts"
          >
            Contacts
            <FaUsers className={s.iconContacts} />
          </Nav.Link>
        </Link>

        <div className={s.containerUser}>
          <FaUserAstronaut height="40" className={s.icon} />
          <p className={s.text}>Welcome, {userName}</p>
          <Button
            className={s.button}
            type="button"
            variant="outline-primary"
            onClick={() => dispatch(logOutUser())}
          >
            <FaPowerOff className={s.icon} />
          </Button>
        </div>
      </Nav>
    </>
  );
}

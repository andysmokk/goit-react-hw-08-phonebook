import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink className={s.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <NavLink className={s.navLink} to="/contacts">
          Contacts
        </NavLink>
      ) : null}
    </nav>
  );
}

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <nav>
      <NavLink className={s.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={s.navLink} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}

import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink className={s.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={s.navLink} to="/login">
        Login
      </NavLink>
    </div>
  );
}

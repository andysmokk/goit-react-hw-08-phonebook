import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import s from './AppBar.module.css';
// import { PrivateRoute } from '../routes/PrivateRoute';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header className={s.container}>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
        {/* <AuthNav />
        <UserMenu /> */}
      </header>
      <hr className={s.line} />
    </>
  );
}

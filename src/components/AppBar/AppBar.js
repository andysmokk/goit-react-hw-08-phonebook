import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <header>{isLoggedIn ? <UserMenu /> : <Navigation />}</header>
    </>
  );
}

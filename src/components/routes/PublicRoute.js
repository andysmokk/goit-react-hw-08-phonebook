import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export function PublicRoute({ component: Component }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Component />}</>;
}

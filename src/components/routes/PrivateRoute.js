import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <h1>PRIVATE</h1>
      {isLoggedIn ? <Component /> : <Navigate to="/login" />}
    </>
  );
}

import { useSelector, useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div className={s.container}>
      <img
        src="https://img.icons8.com/ios/50/000000/ninja-head.png"
        alt=""
        width="25"
      ></img>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
}

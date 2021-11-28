import { useSelector, useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import s from './UserMenu.module.css';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOutUser } from '../../redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link className={s.navLink} eventKey="/" href="/">
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className={s.navLink} eventKey="/contacts" href="/contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>

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
      </Nav>
    </>
  );
}

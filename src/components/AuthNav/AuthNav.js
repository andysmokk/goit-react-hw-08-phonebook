import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <h1>Hello</h1>
    // <Nav variant="tabs" defaultActiveKey="/">
    //   <Nav.Item>
    //     <Nav.Link className={s.navLink} eventKey="/" href="/">
    //       Home
    //     </Nav.Link>
    //   </Nav.Item>

    //   <Nav.Item>
    //     <Nav.Link className={s.navLink} eventKey="/register" href="/register">
    //       Register
    //     </Nav.Link>
    //   </Nav.Item>

    //   <Nav.Item>
    //     <Nav.Link className={s.navLink} eventKey="/login" href="/login">
    //       Login
    //     </Nav.Link>
    //   </Nav.Item>

    //   <NavLink className={s.navLink} to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink className={s.navLink} to="/login">
    //     Login
    //   </NavLink>
    // </Nav>
  );
}

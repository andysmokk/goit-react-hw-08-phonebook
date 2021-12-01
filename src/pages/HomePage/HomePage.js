import Badge from 'react-bootstrap/Badge';
import s from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={s.titleBox}>
      <h6 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h6>
      <h5 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h5>
      <h4 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h4>
      <h3 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h3>
      <h2 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h2>
      <h1 className={s.title}>
        Welcome to the app <Badge bg="primary">Phonebook</Badge>
      </h1>
      <h2 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h2>
      <h3 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h3>
      <h4 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h4>
      <h5 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h5>
      <h6 className={s.title}>
        <span className={s.text}>Welcome to the app</span>
        <Badge bg="primary">Phonebook</Badge>
      </h6>
    </div>
  );
}

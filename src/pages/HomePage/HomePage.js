import Badge from 'react-bootstrap/Badge';
import s from './HomePage.module.css';

export function HomePage() {
  return (
    <h1 className={s.title}>
      Welcome to the app <Badge bg="primary">Phonebook</Badge>
    </h1>
  );
}

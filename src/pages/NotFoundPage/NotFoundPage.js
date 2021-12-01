import Badge from 'react-bootstrap/Badge';
import s from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={s.box}>
      <Badge bg="secondary">
        <span className={s.text}>404</span>
        <span className={s.flexBox}>Ooops, page not found</span>
      </Badge>
    </div>
  );
}

export default NotFoundPage;

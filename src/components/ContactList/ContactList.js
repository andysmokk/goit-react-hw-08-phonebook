import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { TiDelete } from 'react-icons/ti';
import { FaUserCircle } from 'react-icons/fa';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ListGroup variant="flush">
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item className={s.item} key={id}>
          <FaUserCircle className={s.iconUser} />
          {name}: {number}
          <Button
            className={s.btn}
            variant="outline-primary"
            onClick={() => onDeleteContact(id)}
          >
            <TiDelete className={s.iconRemove} />
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

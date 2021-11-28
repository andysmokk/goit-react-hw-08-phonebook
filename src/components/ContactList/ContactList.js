import { useSelector, useDispatch } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { deleteContact } from '../../redux/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ListGroup className={s.ul} variant="flush">
      {contacts.map(({ id, name, number }) => (
        <ListGroup.Item className={s.item} key={id}>
          {name}: {number}
          <Button
            variant="outline-primary"
            className={s.btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

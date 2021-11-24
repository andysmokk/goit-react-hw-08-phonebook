import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-operations';
import { getFilteredContacts } from '../../redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  // console.log(contacts);

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          {name}: {number}
          <button className={s.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

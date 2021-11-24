import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  postAddContact,
  fetchContacts,
} from '../../redux/phonebook-operations';
import shortid from 'shortid';
import { getContacts, isLoader } from '../../redux/phonebook-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const loader = useSelector(isLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const onSubmit = contact => {
  //   // dispatch(fetchContacts());
  //   dispatch(addContact(contact));
  // };

  const onSubmitForm = e => {
    e.preventDefault();
    resetForm();
    checkContactList();
  };

  const onFormChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addNewContact = () => {
    const newContactId = shortid.generate();
    const newContact = { name, number, id: newContactId };
    dispatch(postAddContact(newContact));
  };

  const checkContactList = () => {
    const normalizedName = name.toLocaleLowerCase();
    contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName,
    )
      ? alert(`${name} is already in contacts`)
      : addNewContact();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label className={s.label} htmlFor={shortid.generate()}>
          <span className={s.span}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Григор Григорян"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onFormChange}
            id={shortid.generate()}
          />
        </label>
        <label className={s.label} htmlFor={shortid.generate()}>
          <span className={s.span}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="111-22-33"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onFormChange}
            id={shortid.generate()}
          />
        </label>
        <div className={s.btnBox}>
          <button className={s.btn} type="submit">
            Add contact
          </button>
          <div className={s.loader}>{loader && <h1>Loading...</h1>}</div>
        </div>
      </form>
    </>
  );
}

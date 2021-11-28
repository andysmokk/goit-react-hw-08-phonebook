import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    dispatch(fetchContacts());
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
    <section>
      <Form className={s.form} onSubmit={onSubmitForm}>
        <Form.Group
          className="mb-3"
          controlId="formBasicName"
          // htmlFor={shortid.generate()}
        >
          {/* <label className={s.label} htmlFor={shortid.generate()}> */}
          <Form.Label className={s.label}>Full name</Form.Label>
          <Form.Control
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter full name*"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onFormChange}
            // id={shortid.generate()}
          />
          <Form.Text className="text-muted">Example: Hanna Sanchez</Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPhone"
          // htmlFor={shortid.generate()}
        >
          {/* <label className={s.label} htmlFor={shortid.generate()}> */}
          <Form.Label className={s.label}>Number</Form.Label>
          <Form.Control
            className={s.input}
            type="Phone"
            name="number"
            placeholder="Enter phone number*"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onFormChange}
            // id={shortid.generate()}
          />
          <div className={s.boxText}>
            <Form.Text className="text-muted">Example: 444-44-44</Form.Text>
            <Form.Text className={`'text-muted'`}>* Required field</Form.Text>
          </div>
        </Form.Group>
        <div className={s.btnBox}>
          <Button className={s.btn} variant="primary" type="submit">
            Add contact
          </Button>
          <div className={s.loader}>{loader && <h1>Loading...</h1>}</div>
        </div>
      </Form>
    </section>
  );
}

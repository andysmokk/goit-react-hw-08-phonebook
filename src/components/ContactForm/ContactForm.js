import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {
  postAddContact,
  fetchContacts,
} from '../../redux/phonebook/phonebook-operations';
import shortid from 'shortid';
import {
  getContacts,
  isLoader,
} from '../../redux/phonebook/phonebook-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const contacts = useSelector(getContacts);

  const loader = useSelector(isLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name && number) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }, [name, number]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    dispatch(fetchContacts());
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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className={s.label}>Full name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name*"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onFormChange}
          />
          <Form.Text className="text-muted">Example: Hanna Sanchez</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className={s.label}>Number</Form.Label>
          <Form.Control
            type="Phone"
            name="number"
            placeholder="Enter phone number*"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onFormChange}
          />
          <div className={s.boxText}>
            <Form.Text className="text-muted">Example: 444-44-44</Form.Text>
            <Form.Text className={`'text-muted'`}>* Required field</Form.Text>
          </div>
        </Form.Group>
        <div>
          <Button
            className={s.btn}
            variant="primary"
            type="submit"
            disabled={disableButton}
          >
            {loader ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{' '}
                Loading...
              </>
            ) : (
              <p>Add contact</p>
            )}
          </Button>
        </div>
      </Form>
    </section>
  );
}

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { ToastContainer } from 'react-toastify';
import { FaUsers, FaAddressBook } from 'react-icons/fa';
import s from './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getNotification } from '../../redux/phonebook/phonebook-selectors';
import {
  NotificationSuccess,
  NotificationError,
} from '../../components/Notification/Notification';

function Phonebook() {
  const notification = useSelector(getNotification);

  useEffect(() => {
    const { status, message } = notification;

    switch (status) {
      case 'success':
        return NotificationSuccess(message);

      case 'error':
        return NotificationError(message);

      default:
        return;
    }
  }, [notification]);

  return (
    <div className={s.box}>
      <div>
        <h1 className={s.title}>
          <Badge bg="dark">
            Phonebook <FaAddressBook className={s.icon} />
          </Badge>
        </h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={s.title}>
          <Badge bg="dark">
            Contacts <FaUsers className={s.icon} />
          </Badge>
        </h2>
        <div>
          <Filter />
          <ContactList />
        </div>
      </div>
      <ToastContainer
        theme="light"
        autoClose={2000}
        closeOnClick={false}
        newestOnTop
        pauseOnHover
      />
    </div>
  );
}

export default Phonebook;

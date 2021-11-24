import s from './Phonebook.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

function Phonebook() {
  return (
    <div className={s.box}>
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={s.divBox}>
        <h2 className={s.title}>Contacts</h2>
        <div className={s.boxList}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default Phonebook;

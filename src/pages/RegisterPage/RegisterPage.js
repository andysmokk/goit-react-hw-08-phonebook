import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/auth-operations';
import s from './RegisterPage.module.css';

export function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeValue = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>REGISTER PAGE</h1>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label className={s.label}>
          <span>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Tony Mahony"
            value={name}
            autoComplete="on"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onChangeValue}
            //   id={shortid.generate()}
          />
        </label>
        <label className={s.label}>
          <span>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="test@test.com"
            value={email}
            autoComplete="on"
            required
            onChange={onChangeValue}
            //   id={shortid.generate()}
          />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="min 6 characters"
            required
            onChange={onChangeValue}
            //   id={shortid.generate()}
          />
        </label>
        <button className={s.btn} type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

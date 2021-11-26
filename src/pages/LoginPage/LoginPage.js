import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../redux/auth/auth-operations';
import s from './LoginPage.module.css';

export function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeValue = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label className={s.label}>
          <span>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="test@test.com"
            value={email}
            // required
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
            // required
            onChange={onChangeValue}
            //   id={shortid.generate()}
          />
        </label>
        <button className={s.btn} type="submit">
          Sign In
        </button>
      </form>
    </>
  );
}

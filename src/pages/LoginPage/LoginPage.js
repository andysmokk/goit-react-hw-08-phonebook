import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoMdLogIn } from 'react-icons/io';
import { logInUser } from '../../redux/auth/auth-operations';
import s from './LoginPage.module.css';

export function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (email && password.length >= 7) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }, [email, password.length]);

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
    <section className={s.section}>
      <h1 className={s.title}>
        SIGN IN <IoMdLogIn className={s.icon} />
      </h1>
      <Form className={s.form} onSubmit={onSubmitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={s.label}>Email address</Form.Label>
          <Form.Control
            className={s.input}
            type="email"
            name="email"
            placeholder="Enter email*"
            value={email}
            required
            onChange={onChangeValue}
          />
          <Form.Text className="text-muted">Example: email@email.com</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={s.label}>Password</Form.Label>
          <Form.Control
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Enter password*"
            required
            onChange={onChangeValue}
          />
          <div className={s.boxText}>
            <Form.Text className="text-muted">Minimum 7 characters</Form.Text>
            <Form.Text className={`'text-muted'`}>* Required field</Form.Text>
          </div>
        </Form.Group>
        <Button
          className={s.btn}
          variant="primary"
          type="submit"
          disabled={disableButton}
        >
          Sign In
        </Button>
      </Form>
    </section>
  );
}

export default LoginPage;

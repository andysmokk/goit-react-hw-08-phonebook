import s from './LoginPage.module.css';

export function LoginPage() {
  return (
    <>
      <h1>LOGIN PAGE</h1>
      <form className={s.form}>
        <label className={s.label}>
          <span>Email</span>
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="test@test.com"
            value={''}
            // required
            //   onChange={onFormChange}
            //   id={shortid.generate()}
          />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={''}
            placeholder="min 6 characters"
            // required
            //   onChange={onFormChange}
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

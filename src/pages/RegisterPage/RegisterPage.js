import s from './RegisterPage.module.css';

export function RegisterPage() {
  return (
    <>
      <h1>REGISTER PAGE</h1>
      <form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Tony Mabony"
            value={''}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
            //   onChange={onFormChange}
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
          Sign Up
        </button>
      </form>
    </>
  );
}

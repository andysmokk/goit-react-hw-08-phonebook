import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      <span className={s.span}>Find contacts by name</span>
      <input className={s.input} type="text" onChange={onChange}></input>
    </label>
  );
}

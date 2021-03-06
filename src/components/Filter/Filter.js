import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <Form>
      <Form.Control
        className={s.input}
        type="text"
        onChange={onChange}
        placeholder="Find contacts by name"
      ></Form.Control>
    </Form>
  );
}

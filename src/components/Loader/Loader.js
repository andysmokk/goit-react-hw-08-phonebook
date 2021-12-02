import LoaderSpinner from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <LoaderSpinner
        type="Oval"
        color="#0a58ca"
        height={150}
        width={150}
        timeout={2000}
      />
    </div>
  );
};

export default Loader;

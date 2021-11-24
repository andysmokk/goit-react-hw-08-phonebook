import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import Phonebook from './components/Phonebook/Phonebook';

function App() {
  return (
    <>
      <section className="container">
        <AppBar />
        <Phonebook />
      </section>
    </>
  );
}

export default App;

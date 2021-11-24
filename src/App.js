import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar/AppBar';
// import Phonebook from './components/Phonebook/Phonebook';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <>
      <section className="container">
        <AppBar />
        {/* <Phonebook /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;

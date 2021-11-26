import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AppBar } from './components/AppBar/AppBar';
// import Phonebook from './components/Phonebook/Phonebook';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PublicRoute } from './components/routes/PublicRoute';
import { PrivateRoute } from './components/routes/PrivateRoute';

function App() {
  return (
    <>
      <section className="container">
        <AppBar />
        {/* <Phonebook /> */}
        <Routes>
          <Route path="/" element={<PrivateRoute component={HomePage} />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
          <Route
            path="/register"
            element={<PublicRoute component={RegisterPage} />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={LoginPage} />}
          />
        </Routes>
      </section>
    </>
  );
}

export default App;

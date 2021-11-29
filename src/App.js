import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { AppBar } from './components/AppBar/AppBar';
// import Phonebook from './components/Phonebook/Phonebook';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { PublicRoute } from './components/routes/PublicRoute';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';

import { getNotification } from './redux/auth/auth-selectors';
import {
  NotificationError,
  NotificationSuccess,
} from './components/Notification/Notification';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchingCurrent);

  const noti = useSelector(getNotification);

  useEffect(() => {
    const { status, message } = noti;

    console.log(status);
    console.log(message);

    switch (status) {
      case 'error':
        return NotificationError(message);

      case 'success':
        return NotificationSuccess(message);

      default:
        return;
    }
  }, [noti]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <section className="container">
        {!isFetchCurrentUser && (
          <>
            <AppBar />
            {/* <Phonebook /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
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
          </>
        )}
        <ToastContainer theme="light" autoClose={2000} />
      </section>
    </>
  );
}

export default App;

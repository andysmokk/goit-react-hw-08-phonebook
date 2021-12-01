import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { AppBar } from './components/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
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

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchingCurrent);

  console.log(isFetchCurrentUser);

  const notification = useSelector(getNotification);

  useEffect(() => {
    const { status, message } = notification;

    switch (status) {
      case 'error':
        return NotificationError(message);

      case 'success':
        return NotificationSuccess(message);

      default:
        return;
    }
  }, [notification]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <section className="container">
        <AppBar />
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
        <ToastContainer
          theme="light"
          autoClose={2000}
          closeOnClick={false}
          newestOnTop
          pauseOnHover
        />
      </section>
    )
  );
}

export default App;

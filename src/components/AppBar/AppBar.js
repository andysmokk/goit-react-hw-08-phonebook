import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import s from './AppBar.module.css';

export function AppBar() {
  return (
    <>
      <header className={s.container}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
      <hr className={s.line} />
    </>
  );
}

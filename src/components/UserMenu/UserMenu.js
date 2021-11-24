import s from './UserMenu.module.css';

export function UserMenu() {
  return (
    <div className={s.container}>
      <img
        src="https://img.icons8.com/ios/50/000000/ninja-head.png"
        alt=""
        width="25"
      ></img>
      <p>Welcome, Name</p>
      <button type="button">Logout</button>
    </div>
  );
}

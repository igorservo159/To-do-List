import { hd, box, texto } from '../css_modules/header.module.css';

const Header = () => {
  return (
    <div className={hd}>
      <div className={box}>
        <h1 className={texto}>React (Vite) To-do List</h1>
      </div>
    </div>
  );
};

export default Header;
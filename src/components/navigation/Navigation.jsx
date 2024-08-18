import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className={css.navListItem}>
            <NavLink
              to="/catalog"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Catalog
            </NavLink>
          </li>
          <li className={css.navListItem}>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

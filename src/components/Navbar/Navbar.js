import { NavLink, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const location = useLocation();

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <div className={styles.header}>
        <div className={styles.container}>
          <input type="checkbox" id="menu" className={styles.container__btn} />
          <label htmlFor="menu" className={styles.container__label}>
            <span className={styles.header__menu_hamburguer}></span>
          </label>
          <ul className={styles.links_list}>
            <li className={styles.menu_list__item}>
              <NavLink
                exact
                to="/"
                className={`${styles.menu_list__link} ${isCurrentPath("/") ? styles.active : ""}`}
              >
                Home
              </NavLink>
            </li>
            {!user && (
              <>
                <li className={styles.menu_list__item}>
                  <NavLink
                    to="/login"
                    className={`${styles.menu_list__link} ${isCurrentPath("/login") ? styles.active : ""}`}
                  >
                    Login
                  </NavLink>
                </li>
                <li className={styles.menu_list__item}>
                  <NavLink
                    to="/register"
                    className={`${styles.menu_list__link} ${isCurrentPath("/register") ? styles.active : ""}`}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className={styles.menu_list__item}>
                  <NavLink
                    to="/posts/create"
                    className={`${styles.menu_list__link} ${isCurrentPath("/posts/create") ? styles.active : ""}`}
                  >
                    New Post
                  </NavLink>
                </li>
                <li className={styles.menu_list__item}>
                  <NavLink
                    to="/dashboard"
                    className={`${styles.menu_list__link} ${isCurrentPath("/dashboard") ? styles.active : ""}`}
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            <li className={styles.menu_list__item}>
              <NavLink
                to="/about"
                className={`${styles.menu_list__link} ${isCurrentPath("/about") ? styles.active : ""}`}
              >
                About
              </NavLink>
            </li>
            {user && (
              <li className={styles.menu_list__item}>
                <button onClick={logout}>Sign Out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
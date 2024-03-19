import { Reset } from "styled-reset";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Reset />
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={styles.navButton}>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to="/projects" className={styles.navButton}>
              Projects
            </NavLink>
          </li>
          <li>
          <NavLink to="/blog" className={styles.navButton}>
              Blog
            </NavLink>
          </li>
          <li>
          <NavLink to="/contact" className={styles.navButton}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

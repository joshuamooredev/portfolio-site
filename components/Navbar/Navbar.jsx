import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.name}>JOSHUA</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

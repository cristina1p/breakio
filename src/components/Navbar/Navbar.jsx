import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        break<span className={styles.accent}>io</span>
      </div>

      <div className={styles.links}>
        <a href="#explore">Explore</a>
        <a href="#solutions">Solutions</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#explore">Log In</a>
        <Button text="Start Now" />
      </div>
    </nav>
  );
}

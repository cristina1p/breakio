import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import type from "../../styles/typography.module.css";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

export function Navbar() {
  // Define state, track visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Explicit close dropdown menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className={styles.nav}>
      <a href="#hero">
        <div className={`${styles.logo} ${type.logo} ${styles.rightNav}`}>
          break<span className={styles.accent}>io</span>
        </div>
      </a>
      {/* Pass state and toggle function */}
      <div className={styles.leftNav}>
        <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />

        {/* Apply conditional class for mobile visibility */}
        <div
          className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}
          onClick={closeMenu}
        >
          <a className={type.navItem} href="#about">
            About
          </a>
          <a className={type.navItem} href="#features">
            Features
          </a>
          <a className={type.navItem} href="#testimonials">
            Testimonials
          </a>
          <a className={type.navItem} href="#stories">
            Stories
          </a>
          <a className={type.navItem} href="#faq">
            FAQ
          </a>
          <Button className={styles.navButton} text="Start Now" />
        </div>
      </div>
    </nav>
  );
}

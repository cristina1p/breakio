import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import type from "../../styles/typography.module.css";
import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#stories" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  // Define state, track visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Create refs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Define listener function
    const handleClickOutside = (event: MouseEvent) => {
      // If click happened outside ref, close menu

      const isButtonRef = buttonRef.current?.contains(event.target as Node);
      const isPopoverRef =
        popoverRef.current && popoverRef.current.contains(event.target as Node);

      if (!isButtonRef && !isPopoverRef) {
        setIsMenuOpen(false);
      }
    };

    // Only attach listener if menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Remove the listener when menu closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
        <HamburgerMenu
          isOpen={isMenuOpen}
          toggle={toggleMenu}
          ref={buttonRef}
        />

        {/* Apply conditional class for mobile visibility */}
        <ul
          className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}
          ref={popoverRef}
        >
          {navLinks.map((link) => (
            <li>
              <a onClick={closeMenu} className={type.navItem} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <Button className={styles.navButton} text="Start Now" />
        </ul>
      </div>
    </nav>
  );
}

import { FacebookIcon } from "../Icons/footer/Facebook";
import { InstagramIcon } from "../Icons/footer/Instagram";
import { LinkedinIcon } from "../Icons/footer/Linkedin";
import { TwitterIcon } from "../Icons/footer/Twitter";
import { YoutubeIcon } from "../Icons/footer/Youtube";
import styles from "./Footer.module.css";
import { FooterColumn } from "./FooterColumn";
import { footerNavigation } from "./data";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridContainer}>
        {footerNavigation.map((col) => (
          <FooterColumn key={col.title} title={col.title} links={col.links} />
        ))}
      </div>
      <hr className={styles.separator} />
      <div className={styles.footerBottom}>
        <div className={styles.legalInfo}>
          <div className={styles.logo}>
            break<span className={styles.accent}>io</span>
          </div>
          <span>@ 2023 - All rights reserved</span>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.youtube.com" target="_blank">
            <YoutubeIcon />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

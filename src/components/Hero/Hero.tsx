import styles from "./Hero.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";

import { Button } from "../Button/Button";

export function Hero() {
  return (
    <section className={`${styles.content} ${layout.sectionContent}`}>
      <div className={`${styles.textGroup} ${layout.textGroup}`}>
        <h1
          className={`${typo.gradientText} ${typo.titleHero} ${layout.title}`}
        >
          It's time to take a break
        </h1>
        <p className={typo.textMain}>
          Build your meditation skills with an app that gives you all you need!
        </p>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className={styles.input}
        />
        <Button className={typo.buttonLarge} text="Start Now" />
      </div>

      <div className={styles.imgContainer}>
        <img
          src="src/assets/hero.png"
          alt="Hero Illustration"
          className={styles.image}
        />
      </div>
    </section>
  );
}

import styles from "./Hero.module.css";
import { Button } from "../Button/Button";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}> It's time to take a break</h1>

        <p>
          Build your meditation skills with an app that gives you all you need!
        </p>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.input}
          />
          <Button text="Start Now" />
        </div>

        <div className={styles.imgContainer}>
          <img
            src="src/assets/hero.png"
            alt="Hero Illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

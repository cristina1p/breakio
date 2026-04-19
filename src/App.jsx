import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

export function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      {/* <main>
        <section className="welcome-section">
          <h1>Figma Design Implementation</h1>
          <p>Ready to test CSS skills</p>
        </section>
      </main> */}
    </div>
  );
}

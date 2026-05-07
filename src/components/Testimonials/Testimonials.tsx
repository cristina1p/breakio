import { testimonialData } from "./data";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";
import shapeLeft from "../../assets/testimonials_images/deco/shapeLeft.png";
import shapeRight from "../../assets/testimonials_images/deco/shapeRight.png";
import { ArrowButton } from "../Stories/ArrowButton";
import { useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setIndex((prev) => Math.min(testimonialData.length - 1, prev + 1));

  return (
    <section
      className={`${styles.testimonialContainer} ${layout.sectionContent}`}
    >
      <img src={shapeRight} className={styles.decorRight} />
      <img src={shapeLeft} className={styles.decorLeft} />

      <h2 className={`${layout.title} ${typo.titleSection}`}>
        What other users say
      </h2>
      <div className={styles.testimonialWrapper}>
        <ArrowButton
          direction="left"
          onClick={handlePrev}
          disabled={index === 0}
          className={`${styles.leftButton}`}
        />
        <TestimonialCard testimonial={testimonialData[index]} />
        <ArrowButton
          direction="right"
          onClick={handleNext}
          disabled={index === testimonialData.length - 1}
          className={`${styles.rightButton}`}
        />
      </div>
    </section>
  );
}

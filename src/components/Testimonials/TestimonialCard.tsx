import { Testimonial } from "./data";
import styles from "./TestimonialCard.module.css";
import typo from "../../styles/typography.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.headerCard}>
        <h2 className={`${typo.titleSubSection} ${styles.titleSubSection}`}>
          {testimonial.title}
        </h2>
        <p className={`${typo.textCard} ${styles.quote}`}>
          {testimonial.quote}
        </p>
      </div>
      <div className={styles.authorInfo}>
        <img src={testimonial.authorAvatar} className={styles.avatarCard} />
        <div className={styles.authorMeta}>
          <h4 className={typo.textSmall}>{testimonial.authorName}</h4>
          <p className={`${typo.textMicro} ${styles.authorRole}`}>
            {testimonial.authorRole}
          </p>
        </div>
      </div>
    </div>
  );
}

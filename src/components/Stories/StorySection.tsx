import { useEffect, useRef, useState } from "react";
import { StoryCard } from "./StoryCard";
import styles from "./StorySection.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";
import { cardStories } from "./data";
import { ArrowButton } from "./ArrowButton";

export function StorySection() {
  // create scroll container reference
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 1.create a state object to track if we are at the start or end
  const [scrollStatus, setScrollStatus] = useState({
    isAtStart: true,
    isAtEnd: false,
  });

  // 2.logic if we are at the start or at the end
  const updatedScrollStatus = () => {
    const container = scrollContainerRef.current;
    // scrollAmount - the jump
    // scrollLeft - how many pixels are hidden of screen to left
    // at beginning is 0, scroll one card - 290
    // scrollWidth - the total width of all cards
    // clientWidth - what the client sees
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      setScrollStatus({
        isAtStart: scrollLeft <= 0,
        isAtEnd: Math.ceil(scrollLeft + clientWidth) >= scrollWidth,
      });
    }
  };

  // 3. set up a listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updatedScrollStatus();
      container.addEventListener("scroll", updatedScrollStatus);
      return () => container.removeEventListener("scroll", updatedScrollStatus);
    }
  }, []);

  // a function that check 'scrollLeft' how far we have moved against 'scrollWidth'
  // 'clientWidth' - visible area

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 290;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`${styles.storiesContainer} ${layout.sectionContent}`}>
      <div className={`${styles.textGroup} ${layout.textGroup}`}>
        <h2 className={`${layout.title} ${typo.titleSection}`}>
          Stories from our users
        </h2>
        <p className={typo.textMain}>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      {/* slideWrapper is anchor point for absolute position button */}
      <div className={styles.sliderWrapper}>
        <ArrowButton
          direction="left"
          onClick={() => scroll("left")}
          disabled={scrollStatus.isAtStart}
          className={`${styles.leftBtn} ${scrollStatus.isAtStart ? styles.disabled : ""}`}
        />
        <ArrowButton
          direction="right"
          disabled={scrollStatus.isAtEnd}
          onClick={() => scroll("right")}
          className={`${styles.rightBtn} ${scrollStatus.isAtEnd ? styles.disabled : ""}`}
        />

        <div className={styles.cardGroup} ref={scrollContainerRef}>
          {cardStories.map((card) => {
            return <StoryCard key={card.id} card={card} />;
          })}
        </div>
      </div>
    </section>
  );
}

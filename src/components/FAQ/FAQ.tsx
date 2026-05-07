import { AccordionItem } from "../Accordion/Accordion";
import { FAQItemProps } from "../types/types";
import styles from "./FAQ.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";
import { useState, useRef, useEffect } from "react";

const questionsData: FAQItemProps[] = [
  {
    id: 1,
    title:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    content:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis",
  },
  {
    id: 2,
    title:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    content:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor",
  },
  {
    id: 3,
    title:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    content:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem",
  },
  {
    id: 4,
    title:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    content:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus",
  },
  {
    id: 5,
    title: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    content: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum",
  },
];

export function FAQ() {
  // 1.store the id of the open item, holds the number of currently expanded item
  // 'openId' - number
  // 'setOpenId' - change number
  // 'null' - closed state
  // note: on state change, this function/component(FAQ) re-renders(re-executes, re-runs)
  const [openId, setOpenId] = useState<number | null>(null);

  // 2.create the reference, attached to the specific div, so outside this will be 'outside'
  const faqRef = useRef<HTMLDivElement>(null);

  // 3.logic that checks the click location
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if the ref exists AND the click target is not inside ref
      // event.target - click
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        // reset or close element
        setOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // clean up the function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // note: `empty array` - runs only on mount
  }, []);

  return (
    <section className={`${styles.faqSection} ${layout.sectionContent}`}>
      <div className={`${styles.textGroup} ${layout.textGroup}`}>
        <h2 className={`${layout.title} ${typo.titleSection}`}>
          Frequently asked questions
        </h2>
        <p className={typo.textMain}>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div ref={faqRef} className={styles.faqContainer}>
        {questionsData.map((question) => {
          return (
            <AccordionItem
              key={question.id}
              item={question}
              // this is item the one that matches our state?
              isOpen={openId === question.id}
              // if clicked set this ID as open,if already opne close it
              onToggle={() =>
                setOpenId(openId == question.id ? null : question.id)
              }
            />
          );
        })}
      </div>
    </section>
  );
}

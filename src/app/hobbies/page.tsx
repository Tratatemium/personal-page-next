"use client";
import styles from "./page.module.css";
import section from "../SectionLayout.module.css";

import useInView from "../../hooks/useInView";

import { Gallery } from "@/components/Gallery";
import { galleries } from "./Hobbies.data";

function Hobbies() {
  const { ref: ref1, isInView: isInview1, isScrollingUp: isScrollingUp1 } =
    useInView();
  const { ref: ref2, isInView: isInview2, isScrollingUp: isScrollingUp2 } =
    useInView();
  const { ref: ref3, isInView: isInview3, isScrollingUp: isScrollingUp3 } =
    useInView();
  const { ref: ref4, isInView: isInview4, isScrollingUp: isScrollingUp4 } =
    useInView();

  return (
    <>
      <h1 className={styles.title}>&lt;My hobbies&gt;</h1>

      <div className={section.content}>
        <section
          ref={ref1}
          className={`${section.section} ${isInview1 ? section.show : isScrollingUp1 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># Cooking</h2>
          <p>
            Cooking is one of my favorite hobbies. I enjoy trying out different
            Asian recipes and baking sourdough bread. It reminds me of coding in
            a way — following a recipe is a type of an algorithm and you can
            experiment with ingredients in a dish like with variables in a
            program until you get it just right!
          </p>
          <Gallery images={galleries.cooking} />
        </section>

        <section
          ref={ref2}
          className={`${section.section} ${isInview2 ? section.show : isScrollingUp2 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># Woodworking</h2>
          <p>
            Woodworking is another thing I deeply enjoy. There&apos;s something
            magical about working with my hands, feeling the grain of the wood,
            and watching raw materials transform into something meaningful. Wood
            feels alive—warm, soft, and full of character. I enjoy both crafting
            entirely new pieces and restoring old furniture, giving them a new
            chapter in their story. Here are two of my favorite projects:
          </p>
        </section>

        <section
          ref={ref3}
          className={`${section.section} ${isInview3 ? section.show : isScrollingUp3 ? section.hideUp : section.hideDown}`}
        >
          <p>
            This late 19th-century table belonged to my great-grandmother and
            has been passed down through my family. Over the years, it suffered
            quite a bit: the finish darkened and nearly disappeared, several
            cracks appeared, and there was bug and water damage on the tabletop.
            I carefully repaired the damaged areas and restored the finish using
            an authentic 19th-century technique:
            <a
              className={section.arrowLink}
              href="https://en.wikipedia.org/wiki/French_polish"
              target="_blank"
              rel="noopener"
            >
              French polishing
            </a>
          </p>
          <Gallery images={galleries.tableRestoration} />
        </section>

        <section
          ref={ref4}
          className={`${section.section} ${isInview4 ? section.show : isScrollingUp4 ? section.hideUp : section.hideDown}`}
        >
          <p>
            My partner is into drawing and scrapbooking, so naturally she has a
            lot of art supplies. These desk organizers became our joint project:
            she created the concept and design, while I prepared the technical
            drawings, had the parts laser-cut from plywood, and handled the
            assembly and finish.
          </p>
          <Gallery images={galleries.deskOrganiser} />
        </section>
      </div>
    </>
  );
}

export default Hobbies;

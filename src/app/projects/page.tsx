"use client"

import styles from "./Projects.module.css";
import section from "../SectionLayout.module.css";

import useInView from "../../hooks/useInView";

import { Gallery } from "@/components/Gallery";
import { ArrowLink } from "@/components/ArrowLink";

import { galleries } from "./Projects.data";
// import { client } from "../../sanity/client.ts";
import { useEffect, useState } from "react";

function Projects() {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   client.fetch(`*[_type == "post"]{title, slug}`).then(setProjects);
  // }, []);

  const [ref1, isInview1, isScrollingUp1] = useInView({ threshold: 0.2 });
  const [ref2, isInview2, isScrollingUp2] = useInView({ threshold: 0.2 });
  const [ref3, isInview3, isScrollingUp3] = useInView({ threshold: 0.2 });
  const [ref4, isInview4, isScrollingUp4] = useInView({ threshold: 0.2 });
  const [ref5, isInview5, isScrollingUp5] = useInView({ threshold: 0.2 });

  return (
    <>
      <div>
        {projects.map((project) => (
          <h2 key={project.slug.current}>{project.title}</h2>
        ))}
      </div>
      <h1 className={styles.title}>&lt;My projects&gt;</h1>
      <div className={section.content}>
        <section
          ref={ref5}
          className={`${section.section} ${isInview5 ? section.show : isScrollingUp5 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># Runera — Fullstack Running Tracker</h2>
          <p className={styles.description}>
            Runera is a fullstack web application for tracking and analyzing
            running activities through a clean, intuitive interface. It features
            a complete authentication flow with protected routes and a
            personalized user dashboard.
            <br />
            <br />
            The app provides full CRUD functionality for runs, with features
            such as pace preview, weather tags, effort levels, and notes for
            deeper insights. Users can also manage their profile data, including
            metrics like date of birth, height, and weight.
            <br />
            <br />
            Built with React and TypeScript on the frontend, and Node.js,
            Express, and MongoDB on the backend. Fully deployed on Vercel.
          </p>
          <div className={styles.links}>
            <ArrowLink
              href="https://runera.vercel.app/"
              text="Live Demo"
              svgType="Globe"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/Runera"
              text="Frontend Code"
              svgType="GitHub"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/Runera-API"
              text="Backend Code"
              svgType="GitHub"
            />
          </div>
        </section>

        <section
          ref={ref4}
          className={`${section.section} ${isInview4 ? section.show : isScrollingUp4 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># Personal Portfolio Web App</h2>
          <p className={styles.description}>
            A modern, responsive web app built with React, React Router DOM, and
            CSS Modules, hosting my portfolio, skills, and hobbies. It features
            multi-page navigation (Home, About, Projects, Hobbies), dark/light
            mode, smooth scroll animations, interactive image lightboxes, and
            accessibility-focused design, delivering an engaging and
            user-friendly experience across devices.
          </p>
          <div className={styles.links}>
            <ArrowLink
              href="https://github.com/Tratatemium/Tratatemium.github.io"
              text="GitHub page"
              svgType="GitHub"
            />
          </div>
        </section>

        <section
          ref={ref1}
          className={`${section.section} ${isInview1 ? section.show : isScrollingUp1 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># 2048 Web Game</h2>
          <p className={styles.description}>
            A modern, responsive web version of the classic 2048 sliding puzzle
            game, built with HTML, CSS, and JavaScript. The project features
            smooth animations, a neon-inspired UI, and full responsiveness for
            both desktop and mobile devices. Players can use keyboard arrows or
            swipe gestures to merge tiles, track their score and moves, and
            restart the game anytime. This project demonstrates interactive game
            logic, responsive design, and user-focused UI implementation.
          </p>
          <p className={styles.description}>
            Inspired by{" "}
            <ArrowLink
              href="https://play2048.co/"
              text="Gabriele Cirulli’s original 2048 game"
            />
            , developed as part of the Front-End Development program at Hyper
            Island.
          </p>
          <Gallery images={galleries.my2048game} openLightbox={openLightbox} />
          <div className={styles.links}>
            <ArrowLink
              href="https://tratatemium.github.io/2048-game/"
              text="2048 game"
              svgType="Globe"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/2048-game"
              text="GitHub page"
              svgType="GitHub"
            />
          </div>
        </section>

        <section
          ref={ref2}
          className={`${section.section} ${isInview2 ? section.show : isScrollingUp2 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}>
            # HappyPaws — Collaborative Frontend Project
          </h2>
          <p className={styles.description}>
            HappyPaws is a mobile-first pet adoption platform developed
            collaboratively with other students as part of Agile & UX coursework
            at Hyper Island. Built using HTML, CSS, Vanilla JavaScript, and
            Vite, the application allows users to browse pets, filter by
            species, save favorites with localStorage, and complete an adoption
            workflow. The project emphasized team collaboration using Git, Agile
            development practices, and component-based architecture, while
            implementing responsive design, accessibility features, and
            interactive UI elements such as pet galleries, urgent adoption
            highlights, and a chat interface.
          </p>
          <Gallery images={galleries.happyPaws} openLightbox={openLightbox} />
          <div className={styles.links}>
            <ArrowLink
              href="https://tratatemium.github.io/HappyPaws/"
              text="Happy paws"
              svgType="Globe"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/HappyPaws"
              text="GitHub page"
              svgType="GitHub"
            />
          </div>
        </section>

        <section
          ref={ref3}
          className={`${section.section} ${isInview3 ? section.show : isScrollingUp3 ? section.hideUp : section.hideDown}`}
        >
          <h2 className={styles.title}># Memory Card Game</h2>
          <p className={styles.description}>
            A browser-based Memory Card Game built with HTML, CSS, and
            JavaScript, featuring interactive card-flipping animations and
            multiple difficulty levels ranging from 6 to 18 pairs. The project
            focuses on DOM manipulation, game logic, and responsive UI design,
            including features such as move tracking, a win dialog, restart and
            main menu functionality, and a clean responsive layout. This project
            demonstrates core frontend development skills including JavaScript
            event handling, card shuffling algorithms, and CSS animations.
          </p>
          <Gallery images={galleries.memoryGame} openLightbox={openLightbox} />
          <div className={styles.links}>
            <ArrowLink
              href="https://tratatemium.github.io/Memory-game/"
              text="Memory game"
              svgType="Globe"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/Memory-game"
              text="GitHub page"
              svgType="GitHub"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;

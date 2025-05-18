import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.glowBehind}></div>
      <div className={styles.glowBehind}></div>
      <div className={styles.glowBehind}></div>
      <div className={styles.container}>
        <div className={styles.bar}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>Design with feeling. Code with purpose.</p>
          <div className={styles.textBlock}>
            <p>
              I'm a front-end developer who thrives on building things that not only look sharp — they move, they respond, they hold attention. I studied Software Engineering at Sheridan College, then spent over 2 years with a startup where I built everything from the ground up.
            </p>
            <p>
              I work with React, Next.js, Three.js, Tailwind, MongoDB, and more — learning what I need as I go. Whether it’s a 3D element, a subtle transition, or something unexpected, I enjoy turning vision into something that feels real on the screen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Journey</h2>
        <p className={styles.subtitle}>From code curious to product-focused.</p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.line}></div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🎓 Sheridan College</h3>
          <p className={styles.cardText}>
            I studied Software Engineering, where I built a foundation in algorithms, databases, and real-world programming.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🚀 Startup Life</h3>
          <p className={styles.cardText}>
            At a growing startup, I wore every hat: UI/UX, front-end architecture, backend integration. I learned by building real things under real pressure.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🛠️ Now</h3>
          <p className={styles.cardText}>
            I'm focused on crafting expressive UIs using React, Next.js, Three.js, and Tailwind. I build fluid experiences that feel intentional and alive.
          </p>
        </div>
      </div>
    </section>
  );
}

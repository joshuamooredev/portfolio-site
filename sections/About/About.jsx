import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.title}>Behind the Builds</h2>
        <p className={styles.subtitle}>
          Code under pressure. Real products shipped.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.line}></div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🚀 10+ Page Production Platforms</h3>
          <p className={styles.cardText}>
            I led <span className={styles.bold}>front-end development</span> for
            Web3 startups, shipping more than
            <span className={styles.bold}> 10 fully responsive pages</span> per
            platform. From investor dashboards to animated portals, I built it
            all, design, layout, animation, routing, and deployment.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>🎯 Current Focus</h3>
          <p className={styles.cardText}>
            I build{" "}
            <span className={styles.bold}>clean, expressive interfaces</span>{" "}
            using
            <span className={styles.bold}>
              {" "}
              React, Next.js, Tailwind, and GSAP
            </span>
            . Mobile-first, accessible, and smooth. I'm also exploring{" "}
            <span className={styles.bold}>Solidity and Hedera</span>.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>📘 Foundation</h3>
          <p className={styles.cardText}>
            Studied{" "}
            <span className={styles.bold}>
              Software Engineering at Sheridan College
            </span>
            , then gained real-world skills by{" "}
            <span className={styles.bold}>
              building live products with real stakes
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerNeon}>
      <div className={styles.footerContent}>
        <h2>Let’s Build Something Together</h2>
        <p>
          Feel free to reach out — whether it’s a question or collaboration.
        </p>

        <ul className={styles.socialList}>
          <li>
            <div className={styles.neonWrapper}>
              <a href="mailto:your@email.com" target="_blank" rel="noreferrer">
                <i className={`fas fa-envelope ${styles.icon}`}></i>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.neonWrapper}>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-github ${styles.icon}`}></i>
              </a>
            </div>
          </li>
          <li>
            <div className={styles.neonWrapper}>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-linkedin-in ${styles.icon}`}></i>
              </a>
            </div>
          </li>
        </ul>

        <p className={styles.footerCopyright}>
          © 2025 Joshua Moore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerNeon}>
      <div className={styles.footerContent}>
        <h2>Let’s Build Something Together</h2>
        <p>
          Feel free to reach out, whether it’s a question or collaboration.
        </p>

        <p className={styles.footerCopyright}>
          © 2025 Joshua Moore. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

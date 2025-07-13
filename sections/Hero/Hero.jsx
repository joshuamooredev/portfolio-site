"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 1️⃣ first read
    setTheme(localStorage.getItem("theme") || "light");

    // 2️⃣ listeners
    const handleThemeChange = (e) => setTheme(e.detail);
    const handleStorage = () =>
      setTheme(localStorage.getItem("theme") || "light");

    window.addEventListener("themechange", handleThemeChange);
    window.addEventListener("storage", handleStorage);

    // 3️⃣ cleanup
    return () => {
      window.removeEventListener("themechange", handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const isDark = theme === "dark";
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.backgroundLogo}>
          <img
            src={
              isDark
                ? "/images/hero/joshua-moore-logo.svg"
                : "/images/hero/joshua-moore-logo-light.svg"
            }
          ></img>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Joshua Moore Front-End Developer</h2>
          <p className={styles.description}>
            Creating <span>high-quality websites</span> for your personal needs.
            Comfortable with <span>React</span> and currently learning more
            about Web3.
          </p>

          
        <div className={styles.neonWrapper}>
          <Image
            src="/images/hero/hero-profile.png"
            alt="Developer profile photo"
            width={180}
            height={180}
            className={styles.image}
          />
        </div>
          <div className={styles.socialMedia}>
            <ul className={styles.socialList}>
              <li>
                <div className={styles.neonWrapperSocial}>
                  <a
                    href="mailto:joshua55150.dev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fas fa-envelope ${styles.icon}`}></i>
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.neonWrapperSocial}>
                  <a
                    href="https://github.com/joshuamooredev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-github ${styles.icon}`}></i>
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.neonWrapperSocial}>
                  <a
                    href="https://www.linkedin.com/in/joshuamooredev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-linkedin-in ${styles.icon}`}></i>
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.neonWrapperSocial}>
                  <a href="tel:4165749685" target="_blank" rel="noreferrer">
                    <i className={`fas fa-phone ${styles.icon}`}></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

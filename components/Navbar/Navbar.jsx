"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
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
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <h1 className={styles.name}>
          <img
            src={
              isDark
                ? "/images/hero/joshua-moore-logo.svg"
                : "/images/hero/joshua-moore-logo-light.svg"
            }
          ></img>
        </h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

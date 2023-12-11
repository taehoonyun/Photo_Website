"use client";

import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import Profile from "./components/profile_pictures/profile";
import About from "./components/about/about";

export default function Home() {
  return (
    <>
      <div className={styles.contents}>
        <Profile />
        <About />
        <div className={styles.last}>
          <div className={styles.bible_verse}>
            <span>
              "But ask the animals, and they will teach you, or the birds in the
              sky, and they will tell you; or speak to the earth, and it will
              teach you, or let the fish in the sea inform you. Which of all
              these does not know that the hand of the Lord has done this? In
              His hand is the life of every creature and the breath of all
              mankind.”
            </span>
            <br/>
            <span>Job 12:7-10 (NIV)</span>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Track } from "../Track/Track";
import styles from "./SearchResults.module.css";

export function SearchResults() {
  return (
    <section className={styles.section}>
      <h2>Results</h2>
      <Track />
    </section>
  );
}

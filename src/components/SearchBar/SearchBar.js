import React from "react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
    return(
        <section className={styles.section}>
            <input type="text" placeholder="Enter a song title"></input>
            <br />
            <button type="submit">Search</button>
        </section>
    )
}

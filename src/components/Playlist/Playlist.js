import React from "react";
import styles from "./Playlist.module.css";

export function Playlist() {
    return (
        <section className={styles.section}>
            <h2>New Playlist</h2>
            <button type="submit">Save to Spotify</button>
        </section>
    )
}
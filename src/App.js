// import logo from './logo.svg';
import styles from './App.module.css';
import './components/SearchBar/SearchBar'
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchResults } from './components/SearchResults/SearchResults';
import { Playlist } from './components/Playlist/Playlist';

function App() {
  return (
    <div className={styles.App}>
      {/* <header className={`${styles["App-header"]}`}> */}
      <header className={styles["App-header"]}>
        <h1>Web-On-Music</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;

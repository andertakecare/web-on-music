import logo from './logo.svg';
import './App.css';
import './components/SearchBar/SearchBar'
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;

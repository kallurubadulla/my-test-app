import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Step 4: New Logo Link */}
        <img src="https://www.propelleraero.com/wp-content/uploads/2021/05/Vector.svg" className="App-logo" alt="logo" />
        <p>
          QA Virtual Internship Task Completed by Kalluru Badulla!
        </p>
        {/* Step 5: New Dirtmate Link */}
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about DirtMate
        </a>
      </header>
    </div>
  );
}

export default App;
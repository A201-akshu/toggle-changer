import './App.css';
import Counter from './Counter';
import {useState} from 'react';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "container dark" : "container"}>

      <h1>click Counter App</h1>
      <Counter />
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}

      </button>
    </div>
  );
}

export default App;

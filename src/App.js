import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [customPreview, setCustomPreview] = useState(false);

  const handleCustomPreview = () => {
    setCustomPreview(!prev);
    customPreview ? window.pmc.style = "display: none;" : window.pmc.style = "display: block;";
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello From Ben & Michelle</h1>
        <p>Hopefully we are making app progress</p>
        <p>Let's see if we can accss this products sku: {window.sku}</p>
        <button 
          onClick={handleCustomPreview}
        >
          Toggle Image Preview
        </button>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {
          <div>
             <Main />
           </div>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
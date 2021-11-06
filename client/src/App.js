import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js';
import BandDetails from './components/BandDetails.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Route exact path="/"element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/band/:id" element={<BandDetails />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

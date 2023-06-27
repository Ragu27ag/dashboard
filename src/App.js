
import './App.css';

import Navbar from './components/Navbar';

import { BrowserRouter } from 'react-router-dom';
import AppBars from './components/AppBars';
import AllRoutes from './AllRoutes';

function App() {

  return (
    <>  
    <BrowserRouter>
    <AppBars />
      <Navbar />
      <AllRoutes/>
      </BrowserRouter>
    </>




  );
}

export default App;

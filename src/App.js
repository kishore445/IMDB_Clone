
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies'
import Watchlist from './components/Watchlist';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  return (
   
     <BrowserRouter>
     <Routes>
     <Route path="/"element={
      <Fragment>
      <Navbar/>
      <Banner/>
      <Movies/>
      </Fragment>
    
     }></Route>
     <Route path="/Watchlist" element={ <Fragment>
      <Navbar/>
     <Watchlist/>
     </Fragment>
     
    }>
    
     </Route>
    
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;

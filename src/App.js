import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Formacion from './components/Formacion';
import Work from './components/Work';
import Others from './components/Others';
import Navbar from './components/Navbar';
import Sobremi from './components/Sobremi';

function App() {
  return (
    <div className="App">
       
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Sobremi" element={<Sobremi/>}/>
          <Route path="/Formacion" element={<Formacion/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Others" element={<Others/>}/>
        </Routes> 
    </Router>
    </div>
  );
}

export default App;

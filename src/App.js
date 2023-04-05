import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
import Otros from './components/Otros';
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
          <Route path="/Experiencia" element={<Experiencia/>}/>
          <Route path="/Otros" element={<Otros/>}/>
        </Routes> 
    </Router>
    </div>
  );
}

export default App;

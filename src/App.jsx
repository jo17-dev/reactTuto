import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './navbar/Navbar';

export const AppChildsContext = createContext()

const App = ()=> {
  const [name, setName] = useState("joel");

  return (
    <AppChildsContext.Provider value={{name, setName}} >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </AppChildsContext.Provider>

  );
}
export default App;

/**
 * Fonctionnement du props drilling
 * on importe createContext
 * sur lelt parent, on cree le contexte d sauvegarde (et on l,exporte pour pouvoir le use dans d'autre fichiers)
 * then on en encadre les elts qu'on veux faire passer avec NomDuContext.provider comme si dessu et on passe les donnes avec value en mode JSON
 * sur les fichiers destination on vas importer useContext
 * importer NomDuContext
 * faire un const {nomVariableEnvoye} = useContext(NomDuContext)
 * et on use nomVariableEnvoye comme si on l'avait declarer dans le contexte là.
 */
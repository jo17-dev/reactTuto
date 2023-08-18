import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './navbar/Navbar';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Formulaire from './pages/Formulaire.jsx';

export const AppChildsContext = createContext()

const App = ()=> {
  const client = new QueryClient();

  const [name, setName] = useState("joel");

  return (
    <QueryClientProvider client={client}>
    <AppChildsContext.Provider value={{name, setName}} >
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/form' element={<Formulaire />} />
        </Routes>
      </Router>
    </AppChildsContext.Provider>
    </QueryClientProvider>

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
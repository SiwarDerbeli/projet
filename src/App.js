import {Route,Routes,BrowserRouter} from 'react-router-dom' ;
// authentification
import Login from './pages/authentification/login'
import Register from './pages/authentification/register'
import ForgotPassword from './pages/authentification/forgotPassword';
import RecupererPassword from './pages/authentification/recupererPassword';
//admin
import GestionEnseignant from './pages/admin/gestion enseignant';
import GestionEtudiant from './pages/admin/gestion etudiant';
import GestionGroupes from './pages/admin/GestionGroupe';
//etudiant
import Presence from './pages/etudiant/presence';
import Notes from './pages/etudiant/notes';
import Emploi from './pages/etudiant/emploi';
//enseignant
import SaisirNotes from './pages/enseignant/saisirNotes';
import ConsulterEmplois from './pages/enseignant/consulterEmploi';
import GestionEmplois from './pages/enseignant/gestionEmplois';


function App() {
  const style=' font-family: "Tilt Neon", sans-serif;'
  return (
  <div style={{style}} className="App">
    <BrowserRouter>
    
    
    <Routes>
      {/** authentification*/}
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgot password' element={<ForgotPassword/>}/>
      <Route path='/recuperer password' element={<RecupererPassword/>}/>
      {/** admin*/}
      <Route path='/admin/gestionEnseignant' element={<GestionEnseignant/>}/>
      <Route path='/admin/gestionEtudiant' element={<GestionEtudiant/>}/>
      <Route path='/admin/gestionGroupes' element={<GestionGroupes/>}/>
      {/** etudiant*/}
      <Route path='/etudiant/presence' element={<Presence/>}/>
      <Route path='/etudiant/notes' element={<Notes/>}/>
      <Route path='/etudiant/emploi' element={<Emploi/>}/>
      {/** enseignant*/}
      <Route path='/enseignant/notes' element={<SaisirNotes/>}/>
      <Route path='/enseignant/emplois' element={<ConsulterEmplois/>}/>
      <Route path='/enseignant/gestionEmploi' element={<GestionEmplois/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

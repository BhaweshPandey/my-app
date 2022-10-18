import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Overview from './Pages/Overview/Overview';
import Ticket from './Pages/Tickets/Ticket';
import Sitebar from './Components/Sitebar/Sitebar';
import Ideas from './Pages/Ideas/Ideas';
import Contacts from './Pages/Contacts/Contacts';
import Agents from './Pages/Agents/Agents';
import Articles from './Pages/Articles/Articles';
import Subscription from './Pages/Subscription/Subscription';
import Settings from './Pages/Settings/Settings';

function App() {
  return (
    <div className='App'>
      <Router>
      <Sitebar></Sitebar>
        <Routes>
          <Route path='/' element={<Overview/>}/>
          <Route path='/Ticket' element={<Ticket/>}/>
          <Route path='/Ideas' element={<Ideas/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/Agents' element={<Agents/>}/>
          <Route path='/Articles' element={<Articles/>}/>
          <Route path='/Settings' element={<Settings/>}/>
          <Route path='/Subscription' element={<Subscription/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

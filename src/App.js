import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Search from './components/Search';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Router>
        <Search path='/'></Search>
        <People path='/people'></People>
        <Planets path='/planets'></Planets>
      </Router>
    </div>
  );
}

export default App;

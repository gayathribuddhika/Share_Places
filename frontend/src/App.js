import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import User from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Route path={"/"}>
        <User/>
      </Route>
    </Router>
    
  );
}

export default App;

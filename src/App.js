import * as React from 'react';
import { useHistory, HashRouter, Route } from 'react-router-dom';
import Home from './Home';
// import About from './About';
import Detail from './components/Detail';
import Copyright from './Copyright';
import projectList from './content/projectList.js';
// import './App.css';


function App() {
  let history = useHistory();
 
  return (
    <div className="App">
    <HashRouter>
    <Route path="/" render={() => (
        <Home projectList={projectList}/>
      )} />
    <Route path="/p/:itemId" render={({ match }) => (
      <Detail 
        history={history} 
        item={projectList.find(i => i.id === match.params.itemId)} />
    )} />
    </HashRouter>
    <Copyright />
    </div>
  );
}

export default App;

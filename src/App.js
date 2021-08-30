import * as React from 'react';
import { useHistory, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Detail from './Detail';
import Copyright from './Copyright';
import projectList from './projectList.js';
import './App.css';


function App() {
  let history = useHistory();
 
  return (
    <div className="App">
    <Route path="/" render={() => (
        <Home projectList={projectList}/>
      )} />
    <Route path="/p/:itemId" render={({ match }) => (
      <Detail 
        history={history} 
        item={projectList.find(i => i.id === match.params.itemId)} />
    )} />
    <Copyright />
    </div>
  );
}

export default App;

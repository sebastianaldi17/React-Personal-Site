// Dependencies import
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// Components import
import Header from './Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Resume from './pages/Resume' 
import MyTimeline from './pages/MyTimeline' 

// align-items center
function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/timeline'>
            <MyTimeline/>
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/resume'>
            <Resume />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

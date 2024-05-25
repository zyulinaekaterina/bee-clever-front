import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Frame1 from './views/frame1'
import Registration from './views/registration'
import Entrance from './views/entrance'
import Coursepage from './views/coursepage'
import Mainpage from './views/mainpage'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Frame1} exact path="/" />
        <Route component={Registration} exact path="/registration" />
        <Route component={Entrance} exact path="/entrance" />
        <Route component={Coursepage} exact path="/coursepage" />
        <Route component={Mainpage} exact path="/mainpage" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

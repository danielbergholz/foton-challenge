import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes

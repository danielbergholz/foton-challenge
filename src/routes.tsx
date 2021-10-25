import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Home from './pages/Home'

const Root: React.FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

const Routes = () => {
  return (
    <Root>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Root>
  )
}

export default Routes

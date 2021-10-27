import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, ChakraProvider } from '@chakra-ui/react'

import './styles/font.css'
import Home from './pages/Home'
import { theme } from './styles/theme'
import Book from './pages/Book'

const Root: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Box maxWidth="480px" margin="0 auto">
      {children}
    </Box>
  </ChakraProvider>
)

const Routes = () => {
  return (
    <Root>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/book/:id">
            <Book />
          </Route>
        </Switch>
      </Router>
    </Root>
  )
}

export default Routes

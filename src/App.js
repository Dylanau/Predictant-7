import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Models from './components/pages/Models';
import ForecastDetails from './components/pages/ForecastDetail';
import Products from './components/pages/Products';
//import About from './components/pages/About';
import {ThemeProvider} from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});


function App() {
    return (
      <ThemeProvider theme= {theme}>

      
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/models' component={Models} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={ForecastDetails} />
        </Switch>
      </Router>
      </ThemeProvider>
  );
}

export default App;

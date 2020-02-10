import React, { Fragment } from 'react';
import {  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from './List.jsx';
import Queen from './Queen.jsx';


function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Drag Queen App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={List}/>
            <Route path="/queen/:id" component={Queen} />
          </Switch>
        </Router>
      </main>
    </Fragment>
  );
}

export default App;

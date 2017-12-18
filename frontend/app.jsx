import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './main.jsx';
import Style from './style.js';

const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <Router>
          <Main />
        </Router>
      </MuiThemeProvider>
    </div>
  )
}

export default App;

import React from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { RaisedButton } from 'material-ui/';

import Home from './home.jsx';
import ToDo from './todo.jsx';

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div> 
        <RaisedButton
          label='HOME'
          primary={true}
          containerElement={
            <Link to='/' />
          }
        />
        <RaisedButton
          label='TODO'
          secondary={true}
          containerElement={
            <Link to='/todo' />
          }
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/todo' component={ToDo} />
        </Switch>
      </div>
    )
  }
}

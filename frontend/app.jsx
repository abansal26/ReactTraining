import React from 'react';
import request from 'request';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import List from './table.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:3000/lists'
    };
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    request.get({url: this.state.url}, (error, response, body) => {
      if (error) console.log(error);
      this.setState({list: JSON.parse(body)})
    });
  }
  
  render() {
    return (
      <div style={{height: "97%"}}>
        <MuiThemeProvider>
          {this.state.list ? 
            <List list={this.state.list} /> :
            <CircularProgress 
              size={80}
              thickness={5}
              style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width: "100%",
                height: "100%"}}/>
          }
        </MuiThemeProvider>
      </div>
    )
  }
}

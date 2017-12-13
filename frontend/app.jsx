import React from 'react';
import request from 'request';
import Table from './table.jsx';

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
      <div>
        <Table list={this.state.list} />
      </div>
    )
  }
}

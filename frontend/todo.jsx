import React from 'react';
import { RaisedButton, Paper, Subheader } from 'material-ui';

import _ from 'lodash';

import List from './list.jsx';
import InputValue from './InputValue.jsx';
import Filter from './filter.jsx';

import Style from './style.js';

export default class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      displayList: [],
      deleteList: []
    }
  }

  deleteItem = (index) => {
    let list = _.filter(this.state.list, (item) => item.index!==index);
    let position = (_.findIndex(this.state.list, (item) => item.index===index));
    this.state.deleteList.push(this.state.list[position]);
    this.setState({
      list,
      displayList: list
    })
  }

  addDeleted =(index) => {
    let deleteList = _.filter(this.state.deleteList, (item) => item.index!==index);
    let list = this.state.list;
    let position = (_.findIndex(this.state.deleteList, (item) => item.index===index));
    list.push(this.state.deleteList[position]);
    this.setState({
      list,
      deleteList,
      displayList: list
    })
  }

  updateList = (value, index) => {
    let list = this.state.list;
    list.push({index, value});
    this.setState({
      list,
      displayList: list
    });
  }

  filterList = (value) => {
    let displayList = _.filter(this.state.list, (item) => {
      return _.includes(item.value, value);
    })
    this.setState({displayList});
  }

  clearList = () => {
    let deleteList = _.concat(this.state.deleteList, this.state.list);
    this.setState({
      list: [],
      displayList: [],
      deleteList
    });
  }

  render() {
    return (
      <div>
        <Paper style={Style.Paper} transitionEnabled={false}>
          <Subheader style={Style.Header}>ToDo App</Subheader>
          <InputValue callbackParent={this.updateList} />
          <Filter callbackParent={this.filterList} />
          <List list={this.state.displayList} button='X' callbackParent={this.deleteItem} />
          <br/>
          <RaisedButton label='Clear List' secondary={true} onClick={this.clearList} />
          <br/>
          <Subheader style={Style.Subheader}>Deleted items</Subheader>
          <List list={this.state.deleteList} button='+' callbackParent={this.addDeleted}/>
        </Paper>
      </div>
    );
  }
}

import React from 'react';
import { TextField, RaisedButton } from 'material-ui';

import _ from 'lodash';

export default class InputValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      index: 0
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    this.setState({value});
  }

  handleClick = (e) => {
    e.preventDefault();
    const { value, index } = this.state;
    if (!_.isEmpty(value.trim())) {
      this.props.callbackParent(value, index);
      this.setState({
        value: '',
        index: index+1
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <TextField
          type='text'
          name='Input'
          value={this.state.value}
          floatingLabelText="Input"
          onChange={this.onTextChanged}
        />
        <br/>
        <RaisedButton label='Add' primary={true} onClick={this.handleClick}/>
      </form>
    )
  }
}
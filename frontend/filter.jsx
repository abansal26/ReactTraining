import React from 'react';
import { TextField } from 'material-ui';

import _ from 'lodash';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    }
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    if (value == '' || !_.isEmpty(value.trim())) {
      this.props.callbackParent(value);
      this.setState({value});
    }
  }

  render() {
    return (
      <TextField
        type='text'
        name='Filter'
        value={this.state.value}
        floatingLabelText="Filter"
        onChange={this.onTextChanged}
      />
    )
  }
}
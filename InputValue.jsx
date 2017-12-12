import React from 'react';
import PropTypes from 'prop-types';

export default class Inputvalue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    this.setState({value});
    this.props.callbackParent(value, this.props.property);
  }

  render() {
    return (
      <div>
        <label >{this.props.name}: </label>
        <input
          type='text'
          name={this.props.property}
          value={this.state.value}
          onChange={this.onTextChanged}/>
      </div>
    )
  }
}

Inputvalue.propTypes = {
  name: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  callbackParent: PropTypes.func.isRequired
}

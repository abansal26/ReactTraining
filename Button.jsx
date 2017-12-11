import React from 'react';
import _ from 'lodash';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {button: true}
  }
  
  componentWillReceiveProps(nextProps) {
    const {email, name, adress, phNo} = nextProps.data;
    const isValid = !(!!_.trim(email) && (!!_.trim(name)) && (!!_.trim(adress))
      && (!!_.trim(phNo)));
    this.setState({button: isValid});
  }

  render() {
    return (
      <button
        type="button"
        disabled={this.state.button}
        onClick={this.props.callbackParent}>
        Submit
      </button>
    )
  }
}

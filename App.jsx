import React from 'react';
import _ from 'lodash';
import Inputvalue from './InputValue.jsx';
import ErrorMessage from './ErrorMessage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      button: true
    };
  }

  handleSubmit = (e) => {
    this.setState({display: true})
  }

  onInputChanged = (value, property) => {
    this.setState({
      [property]: value,
      display: false,
    }, () => this.setState({button: this.isValid()}));
  }

  isValid = () => {
    const {email, name, adress, phNo} = this.state;
    const regexPhNo = /^[0-9]{10}$/;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return (!((regexEmail.test(email)) && (!!_.trim(name)) && (!!_.trim(adress))
      && (regexPhNo.test(phNo))));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.state.button !== nextState.button) || (this.state.display !== nextState.display) ||
      (this.state.email !== nextState.email) || (this.state.phNo !== nextState.phNo))
     return true;
    return false;
  }

  render() {
    return (
      <div>  
        <div>
          <Inputvalue name="Name" property="name" callbackParent={this.onInputChanged}/>
          <br/>
          <Inputvalue name="Email" property="email" callbackParent={this.onInputChanged}/>
          {this.state.email && <ErrorMessage name="email" data={this.state.email}/>}
          <br/>
          <Inputvalue name="Adress" property="adress" callbackParent={this.onInputChanged}/>
          <br/>
          <Inputvalue name="Phone No." property="phNo" callbackParent={this.onInputChanged}/>
          {this.state.phNo && <ErrorMessage name="phNo" data={this.state.phNo}/>}
          <br/>
          <button
            type="button"
            disabled={this.state.button}
            onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div>
          {this.state.display && (
            <div>
              <p>Name: {this.state.name}</p>
              <p>Email: {this.state.email}</p>
              <p>Adress: {this.state.adress}</p>
              <p>Phone No.: {this.state.phNo}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
    
export default App;

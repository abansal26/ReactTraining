import React from 'react';
import Button from './Button.jsx';
import Inputvalue from './InputValue.jsx';

function Display(props) {
  const {name, email, adress} = props.data;
  let phNo = parseInt(props.data.phNo);
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (_.isInteger(phNo) && re.test(email)) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Adress: {adress}</p>
        <p>Phone No.: {phNo}</p>
      </div>
    )
  }
  return <div>Error</div>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
  }

  handleSubmit = (e) => {
    this.setState({display: true})
  }

  onInputChanged = (value, property) => {
    this.setState({
      [property]: value,
      display: false
    });
  }

  render() {
    return (
      <div>  
        <div>
          <Inputvalue name="Name" property="name" callbackParent={this.onInputChanged}/>
          <Inputvalue name="Email" property="email" callbackParent={this.onInputChanged}/>
          <Inputvalue name="Adress" property="adress" callbackParent={this.onInputChanged}/>
          <Inputvalue name="Phone No." property="phNo" callbackParent={this.onInputChanged}/>
          <Button data={this.state} callbackParent={this.handleSubmit}/>
        </div>
        <div>
          {(this.state.display) ? (
            <Display data={this.state}/>
          ) : (
            null
          )}
        </div>
      </div>
    )
  }
}
    
export default App;

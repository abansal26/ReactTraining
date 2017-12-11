import React from 'react';

function ErrorMessage(props) {
  const regexPhNo = /^[0-9]{10}$/;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(props.name == "email" && !regexEmail.test(props.data))
    return <span style={{color: "red"}}>Invalid Email</span>;
  if(props.name == "phNo" && !regexPhNo.test(props.data))
    return <span style={{color: "red"}}>Invalid Phone Number</span>;
  return null;
}

export default ErrorMessage;

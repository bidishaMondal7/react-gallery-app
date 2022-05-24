import React from 'react';

function Button(props) {
  return <button onClick={props.onClick}>{props.buttonName}</button>;
}

export default Button;

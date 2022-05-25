import React from 'react';

/**
 * Custom Button Component
 * @param {*} props buttonName, onClick
 * @returns JSX Element
 */
function Button(props) {
  return <button onClick={props.onClick}>{props.buttonName}</button>;
}

export default Button;
